import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "contact@allianceconsultants.net",
  "baba.kourouma@allianceconsultants.net",
  "devaccrocs@gmail.com",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, clinique, email, telephone, ville, type, message } = body;

    // Validation basique
    if (!nom || !email || !telephone || !type) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const port = Number(process.env.SMTP_PORT) || 587;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // SSL pour le port 465, STARTTLS pour 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject =
      type === "demo"
        ? `[CliniquePro] Demande de démonstration — ${nom}`
        : `[CliniquePro] Demande de devis — ${nom}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: #1b6af5; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">
            ${type === "demo" ? "🗓️ Nouvelle demande de démonstration" : "📋 Nouvelle demande de devis"}
          </h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">CliniquePro — Alliance Computer Consultants</p>
        </div>

        <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; width: 40%;">Nom complet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Clinique / Établissement</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${clinique || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #1b6af5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Téléphone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;"><a href="tel:${telephone}" style="color: #1b6af5;">${telephone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Ville / Pays</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${ville || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px;">Type de demande</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                <span style="background: ${type === "demo" ? "#dbeafe" : "#dcfce7"}; color: ${type === "demo" ? "#1d4ed8" : "#15803d"}; padding: 2px 10px; border-radius: 999px; font-size: 13px; font-weight: 600;">
                  ${type === "demo" ? "Démonstration" : "Devis"}
                </span>
              </td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; white-space: pre-line;">${message}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 6px; border-left: 4px solid #1b6af5;">
            <p style="margin: 0; font-size: 13px; color: #1e40af;">
              ⚡ Répondre à ce prospect : <a href="mailto:${email}" style="color: #1b6af5;">${email}</a>
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: RECIPIENTS.join(", "),
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
