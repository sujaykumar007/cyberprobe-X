import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from "axios"



export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"form">) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("Form Data:", formData)
    axios.post("/api/email", formData).then((res) => {
      console.log(res)
    })
  }

  return (
    <form className={cn("flex h-[450px] flex-col gap-6 border p-20 rounded-xl", className)} {...props} onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-2 text-primary-yellow ">
          <Label htmlFor="name">Name</Label>
          <Input  id="name" type="text" placeholder="adam" required className="p-5 text-white" value={formData.name} onChange={handleChange} />
        </div>
        <div className="grid gap-2 text-primary-yellow ">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="xyz@example.com" required className="p-5 text-white" value={formData.email} onChange={handleChange} />
        </div>
        <div className="grid gap-2 text-primary-yellow ">
          <Label htmlFor="number">Phone No.</Label>
          <Input id="number" type="text" required placeholder="+91 1234567890" className="p-5 text-white" value={formData.number} onChange={handleChange} />
        </div>
        <Button variant="outline" className="w-full" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}
