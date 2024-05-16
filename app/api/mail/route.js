// pages/api/send-email.js
import sendgrid from '@sendgrid/mail';

export async function POST(req) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const body = await req.json();
  const { name, email, message } = body;
  try {
    await sendgrid.send({
      to: 'khoujarami2@gmail.com', // Your email where you'll receive the message
      from: 'contact@innovega.tn', // Your verified sender email
      subject: `New contact form submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission</p><p><strong>Name: </strong> ${name}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p>`,
    });
    return new Response({
      "status": 200,
      "message" : "email sent successfully"
    })

  } catch (error) {
    return new Response({
      "status": 500,
      "message" : "something went wrong"
    })
  }
}
