'use client';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const servicesList = [
  'Web app pentesting',
  'External Network Pentesting',
  'Mobile app pentesting',
  'IoT Pentesting',
  'API pentesting',
  'Cloud security assessment',
  'I want to partner with qualysec',
  'Others',
];

export default function ContactUs() {
  const [phone, setPhone] = useState('');
  const [checkedServices, setCheckedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  const handleCheckboxChange = (service: string) => {
    setCheckedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log("Sending")
    const fullNameInput = document.querySelector('input[placeholder="Enter your full name"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder="Enter your work email"]') as HTMLInputElement;
    const messageInput = document.querySelector('textarea[placeholder="Enter your message here"]') as HTMLTextAreaElement;

    const fullName = fullNameInput?.value.trim();
    const email = emailInput?.value.trim();
    const message = messageInput?.value.trim();
    const trimmedPhone = phone.trim();

    if (!fullName || !email || !trimmedPhone) {
      alert('Please fill in all required fields.');
      setStatus(null);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone: trimmedPhone,
          message,
          services: checkedServices,
        }),
      });

      const result = await res.json();
      alert(result.message);
    } catch (err) {
      console.error('Error sending:', err);
      alert('Something went wrong. Please try again later.');
    } finally {
      setStatus(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-black rounded-lg shadow-md space-y-4 border-2 border-[#b1d450] p-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border p-2 rounded focus:outline-none focus:border-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium border-none">Work Email</label>
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full border-none p-2 rounded focus:outline-none focus:border-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium border-none text-white">Phone Number</label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !p-2 !border !rounded !pl-10 "
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Types of services you need
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {servicesList.map((service) => (
            <label
              key={service}
              className="flex items-center gap-2 p-2 rounded bg-black text-[#b1d450] cursor-pointer"
            >
              <input
                type="checkbox"
                value={service}
                onChange={() => handleCheckboxChange(service)}
                className="accent-[#b1d450] w-4 h-4"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#b1d450]">Message</label>
        <textarea
          placeholder="Enter your message here"
          className="w-full border-null p-2 rounded h-28 focus:outline-none focus:border-none"
        />
      </div>

      <button
        type="submit"
        className="bg-[#b1d450] text-black font-bold px-6 py-2 rounded shadow transition"
      >
        {status || 'Send Message'}
      </button>
    </form>
  );
}
