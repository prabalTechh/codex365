import React from 'react';
import Cardsss from './Cardss';

const Services = () => {
  const cardsData = [
    {
      src: "/web3.jpg",
      title: "Web3",
      description: "I develop secure and scalable decentralized applications (dApps) and smart contracts using Solidity for Ethereum and Rust for Solana. My expertise includes blockchain integration, wallet setup, tokenization, NFTs, and DeFi solutions. Whether building on Ethereum or Solana, I deliver efficient Web3 solutions tailored to your needs."
    },
    {
      src: "/feImg.png",
      title: "Frontend Development",
      description: "Crafting sleek, intuitive, and responsive user interfaces using technologies like React, Next.js, and Tailwind CSS. From simple websites to complex dashboards, I ensure your users have a seamless experience on any device."
    },
    {
      src: "/beImg.png",
      title: "Backend Development",
      description: "Building robust, scalable, and secure backend systems using technologies like Node.js, Express, and MongoDB. I ensure your application's backend is efficient and reliable."
    },
    {
      src: "/full-stack.jpg",
      title: "Fullstack Development",
      description: "Offering end-to-end development services, from frontend to backend, ensuring a cohesive and integrated solution for your application."
    },
    {
      src: "/devops.jpg",
      title: "DevOps",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure to streamline your development and deployment processes."
    },
  ];

  return (
    <div className="py-12 w-full">
      <h1 className="text-xl font-bold mb-6">What I Can Do For You</h1>
      <div className="flex flex-col  ml-8  gap-6">
        {cardsData.map((card, index) => (
          <Cardsss
            key={index}
            src={card.src}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;