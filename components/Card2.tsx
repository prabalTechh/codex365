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
        <Card className="group overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 rounded-t-[2rem]  dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative overflow-hidden aspect-video">
                <Image 
                    src={image} 
                    alt={header} 
                    fill
                    className="group-hover:scale-105 transition-transform p-5  duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-6 space-y-4">
                <CardHeader className="p-0">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {header}
                    </h3>
                </CardHeader>
                
                <Separator className="bg-gradient-to-r from-blue-500 to-purple-600" />
                
                <div className="flex flex-wrap gap-2">
                    {content.map((value, index) => (
                        <span 
                            key={index} 
                            className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/50 hover:scale-105 transition-transform duration-200"
                        >
                            {value}
                        </span>
                    ))}
                </div>
                
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {description}
                </CardDescription>
                
                <div className="flex justify-between items-center pt-2">
                    <Button 
                        variant="ghost" 
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group/btn" 
                        onClick={onClick}
                    >
                        Read More
                        <svg 
                            className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Button>
                    
                    <div className="flex space-x-2">
                        <Button 
                            size="sm" 
                            variant="outline" 
                            className="text-xs border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                            Demo
                        </Button>
                        <Button 
                            size="sm" 
                            className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        >
                            Code
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CardsTwo;
