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
        <Card className="group overflow-hidden border-0 bg-gradient-to-br from-background via-background/80 to-muted/20 rounded-t-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative h-[500px] flex flex-col">
            {/* Gradient overlay for better visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative overflow-hidden aspect-video rounded-t-xl flex-shrink-0">
                <Image 
                    src={src} 
                    alt={title} 
                    fill
                    className="object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-500 p-5 rounded-t-[4rem] rounded-b-[2rem] group-hover:rounded-b-[3rem] opacity-90 group-hover:opacity-100" 
                />
                {/* Subtle fade overlay */}
                <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-60 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating title overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background/95 backdrop-blur-md px-6 py-4 rounded-xl border border-border/50 shadow-lg">
                        <h3 className="text-xl font-bold text-foreground text-center">{title}</h3>
                    </div>
                </div>
            </div>
            
            <div className="p-5 space-y-4 relative flex-1 flex flex-col">
                <CardContent className="p-0 flex-shrink-0">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {title}
                    </h3>
                </CardContent>
                
                <Separator className="bg-gradient-to-r from-primary/50 via-blue-500/50 to-purple-500/50 h-0.5 flex-shrink-0" />
                
                <CardDescription className="text-sm text-muted-foreground leading-relaxed flex-1 overflow-hidden">
                    <div className="h-20 overflow-hidden">
                        {description}
                    </div>
                </CardDescription>
                
                <CardFooter className="p-0 flex gap-3 flex-shrink-0 mt-auto">
                    <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 text-sm h-10 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group/btn font-medium"
                    >
                        <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">Contact Us</span>
                    </Button>
                    <Button 
                        size="sm" 
                        className="flex-1 text-sm h-10 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-sm hover:shadow-md transition-all duration-200 group/btn font-medium"
                    >
                        <span className="group-hover/btn:translate-x-0.5 transition-transform duration-200">View Packages</span>
                    </Button>
                </CardFooter>
            </div>
            
            {/* Subtle border glow on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none"></div>
        </Card>
    );
}
 
export default Cardsss;