"use client";
import { useState } from "react";
import Introduction from "@/components/Introduction";
import Myblogs from "@/components/Myblog";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Menu, X } from "lucide-react";
import Contact from "@/components/ui/Contact";
import { ModeToggle } from "@/components/theme-toggle";

type IntroDataKeys = "Introduction" | "Services" | "Skills" | "Projects" | "Testimonials" | "MyBlogs";

const introData = {
    Introduction: <Introduction />,
    Services: <Services />,
    Skills: <Skills />,
    Projects: <Projects />,
    Testimonials: <Testimonials />,
    MyBlogs: <Myblogs />,
};

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState<IntroDataKeys>("Introduction");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function handleClicks(keys: IntroDataKeys) {
        setActiveComponent(keys);
        setMobileMenuOpen(false); // Close sidebar on selection (mobile)
    }

    return (
        <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col md:flex-row">
            {/* Header */}
            <div className="absolute w-full left-0 bg-background top-0 mx-auto">
                <div className="w-full fixed bg-background flex items-center justify-between py-2 px-6 md:px-20 lg:px-36">
                    <h2 className="text-xl font-extrabold tracking-tighter">Codex365</h2>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
                <Separator />
            </div>

            {/* Desktop Sidebar */}
            <ScrollArea className="hidden md:block w-56 py-12">
                <div className="p-6 fixed">
                    {Object.keys(introData).map((key) => (
                        <div key={key}>
                            <button
                                className="text-xs pl-6 py-1 w-full text-left hover:bg-gray-300 hover:text-black"
                                onClick={() => handleClicks(key as IntroDataKeys)}
                            >
                                {key}
                            </button>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {/* Mobile Sidebar (Slide-in) */}
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } md:hidden`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div
                    className={`fixed top-0 left-0 h-full w-64  shadow-lg transform transition-transform ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="p-6 flex justify-between items-center">
                        <h2 className="text-lg font-bold">Menu</h2>
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    <Separator />
                    <ScrollArea className="p-4">
                        {Object.keys(introData).map((key) => (
                            <div key={key}>
                                <button
                                    className="text-sm py-2 px-4 w-full text-left hover:bg-gray-300 hover:text-black"
                                    onClick={() => handleClicks(key as IntroDataKeys)}
                                >
                                    {key}
                                </button>
                                <Separator className="my-2" />
                            </div>
                        ))}
                    </ScrollArea>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-1/2 min-h-screen p-6 md:p-10">
                {introData[activeComponent]}
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-2/6 flex flex-col items-center h-auto md:h-[100vh] py-12">
                <div className="flex flex-col p-6 gap-2 w-full max-w-xs md:fixed">
                    <div className="flex flex-col text-center md:text-left">
                        <h4 className="text-2xl py-2 font-semibold">Contact Us</h4>
                        <span className="p-2">
                            <h4 className="text-base">Get In Touch</h4>
                            <h4 className="text-xs text-gray-400">Always up for chat.</h4>
                        </span>
                    </div>
                    <div className=""><Contact icon={<Mail />} title="Email" desc="Our friendly team is here to help" />
                        <Contact icon={<MapPin />} title="Location" desc="Ashram, Delhi, India" />
                        <Contact icon={<Phone />} title="Phone" desc="+91 9644554494" /></div>


                    {/* Social Icons */}
                    <div className="flex items-center justify-center md:justify-start gap-6 text-sm p-5">
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
