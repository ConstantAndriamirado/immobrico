'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

const PRESTATIONS = [
  'Montage de meubles',
  'Dressings & PAX',
  'Cuisine & aménagement de cuisine',
  'Mobilier professionnel & bureaux',
  'Aménagement clé en main',
  'Réception, stockage & logistique',
  'Conception & projection 3D',
  'Petits travaux & finitions',
  'Autre projet',
];

const REQUIRED = ['nom', 'tel', 'email', 'ville'] as const;

export default function DevisForm() {
  const [type, setType] = useState('Particulier');
  const [files, setFiles] = useState<File[]>([]);
  const [drag, setDrag] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const previews = useMemo(() => files.map((f) => URL.createObjectURL(f)), [files]);
  useEffect(() => () => previews.forEach((u) => URL.revokeObjectURL(u)), [previews]);

  function addFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files];
    Array.from(list).forEach((f) => {
      if (next.length < 5 && f.type.startsWith('image/')) next.push(f);
    });
    setFiles(next);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errs: Record<string, boolean> = {};
    REQUIRED.forEach((k) => { if (!String(fd.get(k) || '').trim()) errs[k] = true; });
    const consent = (form.elements.namedItem('consent') as HTMLInputElement | null)?.checked;
    if (!consent) errs.consent = true;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    fd.set('type', type);
    fd.delete('photos');
    files.forEach((f) => fd.append('photos', f, f.name));

    setSubmitting(true);
    try { await fetch('/api/devis', { method: 'POST', body: fd }); } catch { /* noop */ }
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="reveal in">
        <div className="success show">
          <div className="mk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l4 4L19 6" /></svg>
          </div>
          <h3>Demande envoyée.</h3>
          <p>Merci, on revient vers vous sous 24 h. À très vite.</p>
        </div>
      </div>
    );
  }

  const errStyle = (k: string) => (errors[k] ? { borderColor: '#e0564a' } : undefined);

  return (
    <div className="reveal">
      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="seg">
          {['Particulier', 'Professionnel'].map((t) => (
            <button key={t} type="button" className={type === t ? 'active' : ''} onClick={() => setType(t)}>{t}</button>
          ))}
        </div>
        <div className="frow">
          <div className="field"><label htmlFor="nom">Nom complet <span className="req">*</span></label><input id="nom" name="nom" type="text" placeholder="Votre nom" style={errStyle('nom')} /></div>
          <div className="field"><label htmlFor="tel">Téléphone <span className="req">*</span></label><input id="tel" name="tel" type="tel" placeholder="06 12 34 56 78" style={errStyle('tel')} /></div>
        </div>
        <div className="frow">
          <div className="field"><label htmlFor="email">E-mail <span className="req">*</span></label><input id="email" name="email" type="email" placeholder="vous@email.fr" style={errStyle('email')} /></div>
          <div className="field"><label htmlFor="ville">Ville / code postal <span className="req">*</span></label><input id="ville" name="ville" type="text" placeholder="Orléans · 45000" style={errStyle('ville')} /></div>
        </div>
        <div className="field">
          <label htmlFor="presta">Type de prestation</label>
          <select id="presta" name="presta" defaultValue={PRESTATIONS[0]}>
            {PRESTATIONS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="msg">Votre projet</label>
          <textarea id="msg" name="msg" placeholder="Ex. : montage d'un dressing PAX + fixation d'un meuble TV au mur, sur Orléans." />
        </div>
        <div className="field">
          <label>Photos du projet (optionnel)</label>
          <div
            className={`drop${drag ? ' drag' : ''}`}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={(e) => { e.preventDefault(); setDrag(false); }}
            onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
          >
            <p><b>Glissez vos photos</b> ou cliquez pour parcourir</p>
            <small>JPG, PNG · jusqu'à 5 photos</small>
          </div>
          <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => addFiles(e.target.files)} />
          <div className="thumbs">
            {files.map((f, i) => (
              <div className="thumb" key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={previews[i]} alt="" />
                <button type="button" aria-label="Retirer" onClick={() => setFiles(files.filter((_, idx) => idx !== i))}>×</button>
              </div>
            ))}
          </div>
        </div>
        <label className="consent" style={errors.consent ? { color: '#e0564a' } : undefined}>
          <input type="checkbox" name="consent" /><span>J'accepte d'être recontacté par ImmoBrico au sujet de ma demande de devis.</span>
        </label>
        <button type="submit" className="btn btn--brass btn--block" disabled={submitting} style={submitting ? { opacity: 0.6 } : undefined}>
          {submitting ? 'Envoi…' : 'Envoyer ma demande'} <span className="arr">→</span>
        </button>
      </form>
    </div>
  );
}
