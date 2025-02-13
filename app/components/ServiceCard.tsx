
import { Button } from "@/components/ui/button";
import {
  Drawer,
  
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface ServiceCardProps {
  title: string;
  description: string;
  drawerTitles: string[];
}

export const ServiceCard = ({ title, description, drawerTitles }: ServiceCardProps) => {
  return (
    <div className="border rounded-lg shadow-xl p-6 flex flex-col items-center text-center bg-slate-50 opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="hover:bg-blue-500 hover:text-white">
            Read More
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
            {drawerTitles.map((drawerTitle, index) => (
              <DrawerHeader key={index}>
                <DrawerTitle className="border-l-4 border-transparent hover:border-l-blue-800 hover:bg-gray-300 p-6 rounded-r-lg">
                  {drawerTitle}
                </DrawerTitle>
              </DrawerHeader>
            ))}
          </div>
        
        </DrawerContent>
      </Drawer>
    </div>
  );
};
