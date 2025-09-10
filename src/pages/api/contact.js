import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('API route hit');
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  console.log('Received:', { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.CONTACT_EMAIL_USER,
      pass: process.env.CONTACT_EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.CONTACT_EMAIL_USER,
      to: 'contact.medhwan@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    });
    console.log('Email sent:', info);
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
} 