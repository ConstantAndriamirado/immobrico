import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const fd = await req.formData();
    const data = {
      type: fd.get('type'),
      nom: fd.get('nom'),
      tel: fd.get('tel'),
      email: fd.get('email'),
      ville: fd.get('ville'),
      presta: fd.get('presta'),
      msg: fd.get('msg'),
    };
    const photos = fd.getAll('photos');

    // Journalisation côté serveur (visible dans les logs Vercel / VPS)
    console.log('[devis] nouvelle demande :', { ...data, photos: photos.length });

    // Envoi e-mail (optionnel) — activez en définissant RESEND_API_KEY + CONTACT_TO.
    // if (process.env.RESEND_API_KEY) {
    //   const { Resend } = await import('resend');
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'ImmoBrico <devis@immobrico.eu>',
    //     to: process.env.CONTACT_TO || 'contact@immobrico.org',
    //     subject: `Nouvelle demande de devis — ${data.nom}`,
    //     text: JSON.stringify(data, null, 2),
    //   });
    // }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_request' }, { status: 400 });
  }
}
