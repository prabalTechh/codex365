import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

interface IProps {
    image: string;
    header: string;
    content: string[];
    description: string;
    onClick: () => void;
}

const CardsTwo = ({ image, header, content, description, onClick }: IProps) => {
    return (
        <Card className="flex flex-col p-4 gap-4 items-center border  rounded-lg shadow-md">
            <Image 
                src={image} 
                alt={header} 
                height={500} 
                width={520} 
                className="border-2 rounded-lg object-cover" 
            />
            <div className="flex flex-col flex-1">
                <CardHeader className="text-base font-semibold">{header}</CardHeader>
                <Separator className="my-2" />
                <div className="flex flex-wrap gap-2 pt-2">
                    {content.map((value, index) => (
                        <CardContent 
                            key={index} 
                            className="bg-[#C4D9FF] dark:bg-gray-700 dark:text-white text-[10px] font-semibold  text-black border rounded-md px-3 py-1"
                        >
                            {value}
                        </CardContent>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <CardDescription className="text-xs flex-1 pr-4">{description}</CardDescription>
                    <Button variant={"default"} className="text-xs" onClick={onClick}>
                        Read More →
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default CardsTwo;
