import os
import re
import unicodedata
from pathlib import Path

import torch
from PIL import Image
from transformers import AutoProcessor, AutoModelForCausalLM


# ==================================================
# CONFIGURATION
# ==================================================

MODEL_PATH = r"D:\florence"

IMAGE_FOLDER = r"D:\Stage M2 2026\immobrico-web\assets"


SUPPORTED_EXT = {
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
}


# Mettre un nombre pour tester
# Exemple : 5
# Mettre None pour toutes les images
TEST_LIMIT = None



# ==================================================
# CHARGEMENT FLORENCE-2
# ==================================================

def load_florence():

    print("Chargement de Florence-2...")

    processor = AutoProcessor.from_pretrained(
        MODEL_PATH,
        trust_remote_code=True
    )


    model = AutoModelForCausalLM.from_pretrained(
        MODEL_PATH,
        trust_remote_code=True
    )


    model.eval()


    print("Florence-2 prêt !\n")


    return processor, model



# ==================================================
# ANALYSE IMAGE
# ==================================================

def analyze_image(
        image_path,
        processor,
        model
):

    try:

        image = Image.open(
            image_path
        ).convert("RGB")


        prompt = "<MORE_DETAILED_CAPTION>"


        inputs = processor(
            text=prompt,
            images=image,
            return_tensors="pt"
        )


        with torch.no_grad():

            generated_ids = model.generate(
                input_ids=inputs["input_ids"],
                pixel_values=inputs["pixel_values"],
                max_new_tokens=40,
                do_sample=False
            )


        result = processor.batch_decode(
            generated_ids,
            skip_special_tokens=True
        )[0]


        return result.strip()



    except Exception as e:

        print(
            f"Erreur IA {image_path.name}: {e}"
        )

        return "image"



# ==================================================
# NETTOYAGE NOM FICHIER
# ==================================================

def clean_name(text):


    text = str(text).lower().strip()


    # Supprimer préfixes parasites
    prefixes = [
        "filename:",
        "caption:",
        "description:",
        "nom du fichier:",
        "image:",
        "photo:",
        "the image shows",
        "the image shows ",
        "this image shows",
        "this image shows ",
        "it shows",
        "it shows ",
        "an image of ",
        "a photo of ",
        "a picture of ",
        "an image showing ",
        "a photo showing ",
        "a picture showing ",
        "une ",
        "un ",
        "des "
    ]

    for prefix in prefixes:

        if text.startswith(prefix):

            text = text[len(prefix):].strip()



    # Supprimer accents
    text = unicodedata.normalize(
        "NFKD",
        text
    )

    text = "".join(
        c
        for c in text
        if not unicodedata.combining(c)
    )



    # Garder lettres, chiffres et espaces
    text = text.replace("\n", " ")
    text = re.sub(r"\s+", " ", text)
    text = text.replace(".", " ")
    text = text.replace(",", " ")
    text = text.replace("-", " ")
    text = re.sub(r"[^a-z0-9]+", " ", text).strip()



    words = [
        word
        for word in text.split(" ")
        if len(word) > 1
    ]


    # Limiter à un nom de fichier court et pertinent
    words = words[:8]


    if not words:

        return "image"



    text = "_".join(words)


    text = text[:50]


    return text




# ==================================================
# GESTION DOUBLONS
# ==================================================

def unique_filename(
        folder,
        name,
        extension
):


    filename = name + extension


    counter = 2



    while (
        folder / filename
    ).exists():


        filename = (
            f"{name}_{counter}{extension}"
        )


        counter += 1



    return filename




# ==================================================
# RENOMMER IMAGE
# ==================================================

def rename_image(
        image,
        processor,
        model
):


    old_name = image.name



    description = analyze_image(
        image,
        processor,
        model
    )



    new_name = clean_name(
        description
    )



    final_name = unique_filename(
        image.parent,
        new_name,
        image.suffix.lower()
    )



    new_path = (
        image.parent /
        final_name
    )



    image.rename(
        new_path
    )



    print(
        f"✔ {old_name}  -->  {final_name}"
    )



# ==================================================
# PROGRAMME PRINCIPAL
# ==================================================

def main():


    folder = Path(
        IMAGE_FOLDER
    )


    processor, model = load_florence()



    images = [

        f

        for f in folder.iterdir()

        if (

            f.is_file()

            and

            f.suffix.lower()
            in SUPPORTED_EXT

        )

    ]



    # Test limité

    if TEST_LIMIT:

        images = images[:TEST_LIMIT]



    total = len(images)



    print(
        f"{total} images trouvées\n"
    )



    for index, image in enumerate(
        images,
        start=1
    ):


        print(
            f"[{index}/{total}]"
        )


        rename_image(
            image,
            processor,
            model
        )



    print(
        "\nTerminé !"
    )



# ==================================================

if __name__ == "__main__":

    main()