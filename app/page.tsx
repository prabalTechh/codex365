'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { useTheme } from "next-themes";
import { Code2, Globe, Rocket, Wallet } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen dark:bg-[#181c25] ">
      {/* Hero Section */}
      <span className="absolute right-2 md:right-28 z-20 top-5"><ModeToggle  /></span>
      <section className="container mx-auto px-6  pb-10 pt-2 flex flex-col items-center text-center">

        <div className="flex items-center  justify-center ">
          <div className="min-h-screen w-56 dark:bg-gradient-to-l from-[#181c25] to-transparent absolute left-0"></div>
          <Image src="/background.webp" width={1200} height={1000} alt="bg" className="blur-0 rounded-full" />
          <div className="min-h-screen w-56 dark:bg-gradient-to-l from-[#181c25] to-transparent absolute right-0"></div>
        </div>

        <div className=" pt-4 ">
          <div className="flex h-full relative  gap-4">
            <Button size="sm" onClick={() => router.push('/profile')} className="max-w-64 " >Get Started</Button>
            <Button size="sm" variant="outline" className="max-w-64" >Learn More</Button>
          </div>


        </div>
        <div className="container py-10 mx-auto px-6">
          <h1 className="text-5xl mx-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text     font-bold tracking-tight mb-8 ">
            Transforming Ideas <br /> into <br />
            <span className="text-primary"> Digital Reality</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto text-muted-foreground mb-8  ">
            We provide end-to-end solutions for startups and businesses, from web development
            to Web3 integration. Your vision, our expertise.
          </p>
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col bg-[#C4D9FF]   dark:bg-zinc-700 items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom web applications built with modern technologies and best practices.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center bg-[#C4D9FF]   dark:bg-zinc-700 text-center">
              <Rocket className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Startup Solutions</h3>
              <p className="text-muted-foreground">
                End-to-end technical solutions to help your startup scale efficiently.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center bg-[#C4D9FF]   dark:bg-zinc-700 text-center">
              <Wallet className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Web3 Services</h3>
              <p className="text-muted-foreground">
                Blockchain integration, smart contracts, and decentralized applications.
              </p>
            </Card>
          </div>
        </div>

      </section>

     
      

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Let's work together to bring your vision to life. Our team is ready to help
          you succeed in the digital world.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground">
          Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              <span className="font-semibold">Codex365</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Codex365. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}