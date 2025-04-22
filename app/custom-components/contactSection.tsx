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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
  
    const trimmedPhone = phone.trim(); // ✅ Add this
  
    if (!fullName.trim() || !email.trim() || !trimmedPhone) {
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
  
      let result;
      try {
        result = await res.json();
      } catch (err) {
        alert('Something went wrong while parsing server response.');
        setStatus(null);
        return;
      }
  
      if (!res.ok) {
        alert(result?.message || 'Failed to send email.');
      } else {
        alert(result.message);
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setCheckedServices([]);
      }
      setStatus(null); // ✅ Reset status after response
    } catch (error) {
      alert('Error sending message. Please try again later.');
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:border-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium border-none">Work Email</label>
          <input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-none p-2 rounded focus:outline-none focus:border-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium border-none text-white">Phone Number</label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass="!w-full !p-2 !border !rounded !pl-10"
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
                checked={checkedServices.includes(service)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
