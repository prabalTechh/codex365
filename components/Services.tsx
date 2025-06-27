import { motion } from 'framer-motion';
import Cardsss from './Cardss';

interface ServiceData {
  id: string;
  src: string;
  title: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    id: "web3",
    src: "/web3.jpg",
    title: "Web3",
    description: "I develop secure and scalable decentralized applications (dApps) and smart contracts using Solidity for Ethereum and Rust for Solana. My expertise includes blockchain integration, wallet setup, tokenization, NFTs, and DeFi solutions. Whether building on Ethereum or Solana, I deliver efficient Web3 solutions tailored to your needs."
  },
  {
    id: "frontend",
    src: "/feImg.png",
    title: "Frontend Development",
    description: "Crafting sleek, intuitive, and responsive user interfaces using technologies like React, Next.js, and Tailwind CSS. From simple websites to complex dashboards, I ensure your users have a seamless experience on any device."
  },
  {
    id: "backend",
    src: "/beImg.png",
    title: "Backend Development",
    description: "Building robust, scalable, and secure backend systems using technologies like Node.js, Express, and MongoDB. I ensure your application's backend is efficient and reliable."
  },
  {
    id: "fullstack",
    src: "/full-stack.jpg",
    title: "Fullstack Development",
    description: "Offering end-to-end development services, from frontend to backend, ensuring a cohesive and integrated solution for your application."
  },
  {
    id: "devops",
    src: "/devops.jpg",
    title: "DevOps",
    description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure to streamline your development and deployment processes."
  }
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-10"
      >
        {/* Header Section */}
        <motion.div 
          variants={headerVariants}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl  font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            What I Can Do For You
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive development services tailored to bring your ideas to life with cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="group"
            >
              <Cardsss
                src={service.src}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center pt-6"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer group">
            <span className="text-sm font-medium">Explore all services</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;