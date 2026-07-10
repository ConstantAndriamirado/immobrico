from PIL import Image
from pathlib import Path
import subprocess

# Extensions supportées
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXT = {".mp4", ".mov", ".avi", ".mkv", ".m4v"}

folder = Path(__file__).parent

for file in folder.iterdir():

    if not file.is_file():
        continue

    if "_compressed_compressed" in file.stem:
        continue

    ext = file.suffix.lower()

    # ==========================
    # IMAGES
    # ==========================
    if ext in IMAGE_EXT:

        out = file.with_name("z_" +file.stem + "_compressed.jpg")

        try:
            from PIL import Image, ImageOps

            img = Image.open(file)

            # Corrige automatiquement l'orientation EXIF
            img = ImageOps.exif_transpose(img)

            if img.mode != "RGB":
                img = img.convert("RGB")

            # Redimensionnement à 80%
            w, h = img.size
            img = img.resize((int(w * 0.8), int(h * 0.8)))

            # Sauvegarde avec qualité réduite
            img.save(
                out,
                quality=40,
                optimize=True
            )

            print(f"✔ Image : {file.name}")

        except Exception as e:
            print(f"Erreur image {file.name} : {e}")

    # ==========================
    # VIDEOS
    # ==========================
    elif ext in VIDEO_EXT:

        out = file.with_name("z_" +file.stem + "_compressed.mp4")

        try:

            subprocess.run([
                "ffmpeg",
                "-i", str(file),
                "-vcodec", "libx264",
                "-crf", "30",
                "-preset", "medium",
                "-acodec", "aac",
                "-b:a", "128k",
                "-y",
                str(out)
            ])

            print(f"✔ Vidéo : {file.name}")

        except Exception as e:
            print(f"Erreur vidéo {file.name} : {e}")

print("\nCompression terminée.")