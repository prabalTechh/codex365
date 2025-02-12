import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

interface Iprops{
    src:string;
    title:string;
    description:string;
}


const Cardsss = ({src,title,description}:Iprops) => {
    return ( 
        <Card className=" flex flex-col items-center justify-center   ">
        <Image src={src} alt="feImage" height={400} width={400}  objectFit="cover" className="mt-5 rounded-lg" />
        <CardContent className="p-3">
            {/* Frontend Development */}
            {title}
        </CardContent>
        <Separator />
        <CardDescription className="text-xs px-5 py-4 text-left">

        {description}
        </CardDescription>
        <CardFooter className="flex gap-2 my-2 w-full  justify-end items-center  ">
            <Button className="text-xs">Contact Us</Button>
            <Button className="text-xs">View Packages</Button>
        </CardFooter>
    </Card>
      );
}
 
export default Cardsss;