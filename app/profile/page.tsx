"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
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
        setMobileMenuOpen(false);
        
        // Quick scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-40 w-full border-b border-slate-200/50 dark:border-slate-700/50 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
                <div className="container mx-auto flex h-14 items-center justify-between px-3 md:px-4">
                    <motion.h2 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent cursor-pointer"
                    >
                        Codex365
                    </motion.h2>
                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="md:hidden p-2 hover:bg-accent/80 rounded-lg transition-all duration-200 border border-border/50"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu size={18} className="text-foreground" />
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* Main Layout Container */}
            <div className="flex h-screen pt-14">
                {/* Desktop Sidebar - Fixed */}
                <aside className="hidden lg:block w-64 border-r border-border/50 bg-background/50 backdrop-blur-sm flex-shrink-0">
                    <div className="h-full overflow-y-auto">
                        <div className="p-6">
                            <nav className="space-y-2">
                                {Object.keys(introData).map((key, index) => (
                                    <motion.button
                                        key={key}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ 
                                            delay: index * 0.05,
                                            duration: 0.15
                                        }}
                                        whileHover={{ x: 3, scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                                            activeComponent === key
                                                ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                                                : "text-muted-foreground hover:text-foreground hover:bg-accent/50 border-border/30 hover:border-border/50"
                                        }`}
                                        onClick={() => handleClicks(key as IntroDataKeys)}
                                    >
                                        {key}
                                    </motion.button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </aside>

                {/* Mobile Sidebar */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ 
                                    type: "spring", 
                                    damping: 30, 
                                    stiffness: 300
                                }}
                                className="fixed left-0 top-0 h-full w-80 border-r border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between p-6 border-b border-border/50">
                                    <h2 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                        Navigation
                                    </h2>
                                    <motion.button 
                                        whileHover={{ scale: 1.05, rotate: 45 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 hover:bg-accent/80 rounded-lg transition-all duration-200 border border-border/50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <X size={18} className="text-foreground" />
                                    </motion.button>
                                </div>
                                <ScrollArea className="h-[calc(100vh-88px)] p-4">
                                    <nav className="space-y-2">
                                        {Object.keys(introData).map((key, index) => (
                                            <motion.button
                                                key={key}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05, duration: 0.15 }}
                                                whileHover={{ x: 3, scale: 1.01 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                                                    activeComponent === key
                                                        ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 dark:from-emerald-500/10 dark:to-cyan-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50 border-border/30 hover:border-border/50"
                                                }`}
                                                onClick={() => handleClicks(key as IntroDataKeys)}
                                            >
                                                {key}
                                            </motion.button>
                                        ))}
                                    </nav>
                                </ScrollArea>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content - Scrollable */}
                <main className="flex-1 overflow-y-auto bg-gradient-to-br from-background/50 to-muted/30 scrollbar-hide relative">
                    {/* Zebra background pattern - only visible in light theme */}
                    <div className="fixed inset-0 zoom-in-90 bg-[url('/zebra.jpg')] bg-repeat opacity-10 rotate-180 dark:opacity-0 transition-opacity duration-300 pointer-events-none" style={{ top: '3.5rem', left: '16rem', right: '20rem' }}></div>
                    
                    <div className="p-6 lg:p-8 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeComponent}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ 
                                    duration: 0.2,
                                    ease: "easeOut"
                                }}
                                className="w-full"
                            >
                                {introData[activeComponent]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>

                {/* Contact Section - Fixed */}
                <aside className="hidden lg:block w-80 border-l border-border/50 bg-background/50 backdrop-blur-sm flex-shrink-0">
                    <div className="h-full overflow-y-auto">
                        <div className="p-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="text-center lg:text-left space-y-3">
                                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                        Get In Touch
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Always up for a chat about new opportunities
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <Contact 
                                        icon={<Mail className="h-4 w-4" />} 
                                        title="Email" 
                                        desc="Our friendly team is here to help" 
                                    />
                                    <Contact 
                                        icon={<MapPin className="h-4 w-4" />} 
                                        title="Location" 
                                        desc="Ashram, Delhi, India" 
                                    />
                                    <Contact 
                                        icon={<Phone className="h-4 w-4" />} 
                                        title="Phone" 
                                        desc="+91 9644554494" 
                                    />
                                </div>

                                <Separator className="bg-border/50" />

                                {/* Social Icons */}
                                <div className="space-y-3">
                                    <h4 className="text-sm font-medium text-muted-foreground">Follow Us</h4>
                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                        {[
                                            { icon: Github, href: "https://github.com/yourusername" },
                                            { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                                            { icon: Twitter, href: "https://twitter.com/yourusername" }
                                        ].map((social, index) => (
                                            <motion.a
                                                key={social.icon.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ 
                                                    delay: 0.2 + index * 0.05,
                                                    duration: 0.15
                                                }}
                                                whileHover={{ 
                                                    scale: 1.1, 
                                                    y: -2,
                                                    transition: { duration: 0.1 }
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-3 hover:bg-gradient-to-r hover:from-emerald-500/20 hover:to-cyan-500/20 dark:hover:from-emerald-500/10 dark:hover:to-cyan-500/10 rounded-xl transition-all duration-200 border border-border/50 hover:border-emerald-500/30 group"
                                            >
                                                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
