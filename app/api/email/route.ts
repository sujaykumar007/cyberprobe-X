import { NextResponse } from 'next/server';
import emailjs from '@emailjs/nodejs';

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, message, services } = await req.json();

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Full name, email, and phone are required.' },
        { status: 400 }
      );
    }

    // Optional: Split name into first and last
    const [firstName, ...rest] = fullName.split(' ');
    const lastName = rest.join(' ') || '—';

    // Check EmailJS environment variables
    if (
      !process.env.EMAILJS_SERVICE_ID ||
      !process.env.EMAILJS_TEMPLATE_ID ||
      !process.env.EMAILJS_PUBLIC_KEY ||
      !process.env.EMAILJS_PRIVATE_KEY
    ) {
      return NextResponse.json(
        { success: false, message: 'EmailJS credentials are not set.' },
        { status: 500 }
      );
    }

    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        to_name: 'Support Team',
        from_first_name: firstName,
        from_last_name: lastName,
        from_email: email,
        phone: phone,
        message: message || '',
        selected_services: services?.join(', ') || 'No services selected',
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY!,
        privateKey: process.env.EMAILJS_PRIVATE_KEY!,
      }
    );

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
