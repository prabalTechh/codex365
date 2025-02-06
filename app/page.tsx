'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Code2, Globe, Rocket, Wallet } from "lucide-react";
import {ModeToggle} from "@/components/theme-toggle";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-xl">Codex365</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Transforming Ideas into
          <span className="text-primary"> Digital Reality</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          We provide end-to-end solutions for startups and businesses, from web development
          to Web3 integration. Your vision, our expertise.
        </p>
        <div className="flex gap-4">
          <Button size="lg" onClick={()=>router.push('/profile')}>Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom web applications built with modern technologies and best practices.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
              <Rocket className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Startup Solutions</h3>
              <p className="text-muted-foreground">
                End-to-end technical solutions to help your startup scale efficiently.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
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