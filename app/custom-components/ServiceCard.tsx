
import { Button } from "@/components/ui/button";
import {
  Drawer,
  
  DrawerContent,

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
    <div className="border rounded-lg shadow-xl p-6 flex flex-col items-center text-center bg-white opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-black ">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
      <Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline" className="hover:bg-[#91ff00]   text-black">
      Read More
    </Button>
  </DrawerTrigger>
  <DrawerContent 
    className="fixed inset-x-0 mx-auto bottom-0 h-[40vh] w-[90%] bg-white rounded-t-lg shadow-lg overflow-y-auto"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
      {drawerTitles.map((drawerTitle, index) => (
        <DrawerTitle 
          key={index} 
          className="border-l-4 border-transparent hover:border-l-blue-800 hover:bg-gray-300 p-4 rounded-r-lg"
        >
          {drawerTitle}
        </DrawerTitle>
      ))}
    </div>
  </DrawerContent>
</Drawer>

    </div>
  );
};
