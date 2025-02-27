'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus('Sending...')

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    setStatus(data.message)

    if (data.success) {
      setFormData({ name: '', email: '', message: '' }) // Reset form
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col  justify-center items-center text-white">
      <h2 className="text-2xl  text-primary-yellow">Send Us a Message</h2>
      
      {status && <p className="text-green-500">{status}</p>}

      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" required />
      
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" required />
      
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white" required></textarea>

      <button type="submit" className="w-full bg-primary-yellow text-black p-2 rounded font-semibold">Send Email</button>
    </form>
  )
}
