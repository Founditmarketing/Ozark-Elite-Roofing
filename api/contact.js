import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required.' });
  }

  try {
    await resend.emails.send({
      from: 'Ozark Elite Roofing <hello@ozarkeliteroofing.com>',
      to: ['ervin@ozarkeliteroofing.com'],
      reply_to: email || undefined,
      subject: `New Roofing Estimate Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #1a2e1a; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #a3c230; margin: 0; font-size: 22px;">New Estimate Request</h1>
            <p style="color: #ccc; margin: 4px 0 0; font-size: 14px;">Ozark Elite Roofing — Contact Form Submission</p>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">
                  <a href="tel:${phone}" style="color: #a3c230;">${phone}</a>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #111;">
                  <a href="mailto:${email}" style="color: #a3c230;">${email}</a>
                </td>
              </tr>` : ''}
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #111;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>` : ''}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #f0f7e0; border-left: 4px solid #a3c230; border-radius: 4px;">
              <p style="margin: 0; color: #555; font-size: 13px;">
                💡 <strong>Reply directly to this email</strong> to respond to ${name}${email ? ` at ${email}` : ''}.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
