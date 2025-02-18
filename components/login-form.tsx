import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {assets} from "../app/assets/assets"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold text-primary-yellow">Want Help!</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter you details below
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2 text-white">
          <Label htmlFor="email" >Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2 text-white">
          <div className="flex items-center">
            <Label htmlFor="password" >Phone No.</Label>
            
          </div>
          <Input id="number" type="text" required placeholder="+91 1234567890" />
        </div>
        
    
        <Button variant="outline" className="w-full">
         Submit 
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
