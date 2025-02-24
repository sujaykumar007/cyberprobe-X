import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



const services = [
  {
    id: 1,
    name: "web application pentestisting",
    description: "Enter your credentials to access your account.",
  },
  {
    id: 2,
    name: "web application pentestisting",
    description: "Enter your credentials to access your account.",
  },
  {
    id: 3,
    name: "web application pentestisting",
    description: "Enter your credentials to access your account.",
  },
];


export function ServiceCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">  
   { services.map((service, index) => (
      <Card className="relative w-[550px] py-12 overflow-hidden  bg-black border-opacity-35 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">{service.name}</CardTitle>
          <CardDescription>
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
        </CardContent>
        <BorderBeam duration={8} size={100} />
      </Card>
    ))}
    
    </div>
  );
}
