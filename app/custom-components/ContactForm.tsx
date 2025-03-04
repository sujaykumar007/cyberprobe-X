'use client'

import {  useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setStatus('Sending...')
    console.log(formData)

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await res.json()
    setStatus(data.message)

    if (data.success) {
      setFormData({ firstName: '', lastName: '', email: '', companyName: '',  phone: '', message: '' }) 
    }
  }

  return (
    <Card className="flex flex-col md:flex-row bg-black text-white py-10 px-5 rounded-2xl shadow-lg w-full ">
      <div className="flex-1 flex flex-col justify-center px-16 space-y-4">
        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
      </div>

      <CardContent className="flex-1 pt-10 md:pt-0 ">
        <form onSubmit={handleSubmit} className="space-y-6 md:w-[85%] w-full">
          {status && <p className="text-primary-yellow">{status}</p>}

          <div className="flex space-x-4">
            <Input type="text" name="firstName" placeholder="Your First Name" value={formData.firstName} onChange={handleChange} required className="bg-gray-800 py-5 text-white" />
            <Input type="text" name="lastName" placeholder="Your Last Name" value={formData.lastName} onChange={handleChange} required className="bg-gray-800 py-5 text-white" />
          </div>
          <Input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} required className="bg-gray-800 py-5 text-white" />
          <Input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required className="bg-gray-800 py-5 text-white" />
          <Input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="bg-gray-800 py-5 text-white appearance-none" />
          <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}  className="bg-gray-800 py-5 text-white" />
          
          <Button type="submit" className="w-full bg-primary-yellow text-black font-semibold hover:bg-primary-yellow">Send Email</Button>
        </form>
      </CardContent>
    </Card>
  )
}
