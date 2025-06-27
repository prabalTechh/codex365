'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Globe, Rocket, Wallet, X } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Separate state for hydration and modal
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const router = useRouter();

  
  // Handle hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const handleContactClick = () => {
    setIsModalOpen(true);
    setSubmitSuccess(false);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Fixed the empty dependency array and moved API call to form submission handler
  // Removed the problematic useEffect with API call
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Make actual API call when form is submitted
      const response = await fetch('/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      // Check if the response was successful
      if (response.ok) {
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsModalOpen(false);
        }, 2000);
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLearnMore = () => {
    // Smoothly scroll to services section
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#181c25]">
      {/* Hero Section */}
      <span className="absolute right-2 md:right-28 z-20 top-5">
        <ModeToggle />
      </span>

      <section className="container mx-auto px-6 pb-10 pt-2 flex flex-col items-center text-center">
        <div className="flex items-center justify-center">
          <div className="hidden md:block min-h-screen w-56 dark:bg-gradient-to-l from-[#181c25] to-transparent absolute left-0"></div>
          <Image src="/background.webp" width={1200} height={1000} alt="bg" className="blur-0 rounded-full" priority />
          <div className="hidden md:block min-h-screen w-56 dark:bg-gradient-to-l from-[#181c25] to-transparent absolute right-0"></div>
        </div>

        <div className="pt-4">
          <div className="flex h-full relative gap-4">
            <Button size="sm" onClick={() => router.push('/profile')} className="max-w-64">
              Get Started
            </Button>
            <Button size="sm" variant="outline" className="max-w-64" onClick={handleLearnMore}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="container py-10 mx-auto px-6">
          <h1 className="text-4xl text-center md:text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold tracking-tight mb-8">
            Transforming Ideas <br /> into <br />
            <span className="text-primary"> Digital Reality</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto text-muted-foreground mb-8">
            We provide end-to-end solutions for startups and businesses, from web development
            to Web3 integration. Your vision, our expertise.
          </p>

          <h2 id="services" className="text-3xl font-bold text-center mb-16">Our Services</h2>

          <div className="grid grid-cols-1 px-6 md:px-5 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col bg-[#C4D9FF] dark:bg-zinc-700 items-center text-center">
              <Globe className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom web applications built with modern technologies and best practices.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center bg-[#C4D9FF] dark:bg-zinc-700 text-center">
              <Rocket className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Startup Solutions</h3>
              <p className="text-muted-foreground">
                End-to-end technical solutions to help your startup scale efficiently.
              </p>
            </Card>
            <Card className="p-6 flex flex-col items-center bg-[#C4D9FF] dark:bg-zinc-700 text-center">
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
        <Button size="lg" className="bg-primary text-primary-foreground" onClick={handleContactClick}>
          Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-2 py-4 md:px-6 md:py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center p-2 gap-2">
              <Code2 className="h-5 w-5" />
              <span className="font-semibold">Codex365</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2024 Codex365.<br /> All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isClient && isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg relative">
            <button 
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={closeModal}
            >
              <X className="h-5 w-5" />
            </button>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <h2 className="text-2xl font-semibold mb-4 text-green-500">Message Sent!</h2>
                <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    required
                    rows={4}
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}