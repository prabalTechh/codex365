"use client"
import Introduction from "@/components/Introduction";
import Myblogs from "@/components/Myblog";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Github, Linkedin, LocateFixedIcon, LocateIcon, Mail, MapPin, Phone, Twitter, } from 'lucide-react';
import Contact from "@/components/ui/Contact";
import { ModeToggle } from "@/components/theme-toggle";
type IntroDataKeys = 'Introduction' | 'Services' | 'Skills' | 'Projects' | 'Testimonials' | 'MyBlogs';

const introData = {
    Introduction: <Introduction />,
    Services: <Services />,
    Skills: <Skills />,
    Projects: <Projects />,
    Testimonials: <Testimonials />,
    MyBlogs: <Myblogs />,
};

const Dashboard = () => {

    const [activeComponent, setActiveComponent] = useState<IntroDataKeys>("Introduction")

    function handleClicks(keys: IntroDataKeys) {
        setActiveComponent(keys);
    }
    return (
        <div className="min-h-screen max-w-screen-xl mx-auto flex">
           <div className="absolute flex items-center   w-full left-0  bg-background top-0  mx-auto ">
            <div className="w-full gap-2  fixed mt-14 bg-background flex flex-col items-end max-xl:px-20 py-2 "><div className="flex items-center w-full px-36 justify-between"><h2>Codex365</h2> <ModeToggle /></div><Separator /></div></div> 
            <ScrollArea className="w-56 py-12 ">
                <div className="p-6 fixed ">
           
                    {Object.keys(introData).map((key) => (
                        <div key={key}>
                            <button
                                key={key}
                                className="text-xs pl-6  py-2 w-full text-left hover:bg-gray-300 hover:text-black hover:m-1 "
                                onClick={() => handleClicks(key as IntroDataKeys)}
                            >
                                {key}
                            </button>
                            <Separator className="my-2" />
                        </div>
                    ))}

                </div>
            </ScrollArea>
            <div className="w-1/2 min-h-screen p-10">
                {introData[activeComponent]}
            </div>
            <div className="w-2/6 flex flex-col  items-center   h-[100vh] py-12 ">
                <div className="flex fixed  flex-col p-6 gap-2">
                    <div className="flex flex-col " >
                        <h4 className=" text-xl font-semibold ">Contact Us</h4>

                        <span className="p-2">
                            <h4 className="text-base ">Get In Touch</h4>
                            <h4 className="text-xs text-gray-400">Always up for chat.</h4>

                        </span>
                    </div>

                    <Contact icon={<Mail />} title={"Email"} desc="Our friendly team is here to Help" />
                    <Contact icon={<MapPin />} title={"Location"} desc="Ashram, Delhi, India" />
                    <Contact icon={<Phone />} title={"Phone"} desc="+91 9644554494" />
                    <div className="flex items-center justify-center gap-6 text-sm p-5">
                        <Github />
                        <Linkedin />
                        <Twitter />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
