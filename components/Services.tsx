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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 border-b pb-4"
        >
          What I Can Do For You
        </motion.h1>

        <div className="grid gap-8">
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Cardsss
                src={service.src}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;