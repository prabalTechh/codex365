import { motion } from 'framer-motion';
import CardsTwo from "./Card2";

// Define TypeScript interfaces for better type safety
interface ProjectData {
  id: string;
  image: string;
  header: string;
  content: string[];
  description: string;
}

const projectsData: ProjectData[] = [
  {
    id: "eshop",
    image: "/eshop.png",
    header: "E-shop",
    content: ["nextjs", "Typescript", "MongoDb", "Prisma", "nextAuth", "Stripe"],
    description: "Built a feature-rich ecommerce platform from scratch using Next.js, React, TypeScript, Tailwind CSS, Prisma, and MongoDB. Designed a dynamic frontend, implemented secure user authentication, optimized database queries, and deployed the application for production. This project showcases expertise in full-stack development, scalable architecture, and modern web technologies."
  },
  {
    id: "paytm",
    image: "/paytm.png",
    header: "Payment App",
    content: ["Reactjs", "Typescript", "Express", "Mongodb", "Regex"],
    description: "A full-stack application mimicking core functionalities of Paytm, built using modern technologies for backend and frontend development. The project ensures security, efficiency, and user-centric design."
  },
  {
    id: "void",
    image: "/void.png",
    header: "Second Brain (Void)",
    content: ["Reactjs", "Vite", "Typescript", "Express", "MongoDb"],
    description: "A digital content storage system designed to help users organize and retain valuable information. It enables seamless content management by allowing users to store information from multiple sources like Twitter, YouTube, and Google Docs in a centralized place. With efficient data retrieval and a user-friendly interface, Second Brain streamlines knowledge management and enhances productivity."
  },
  {
    id: "beyoundChats",
    image: "/beyoundChats.png",
    header: "Beyoungchat",
    content: ["nextjs", "Typescript", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Cheerio"],
    description: "BeyondChat is a dynamic chatbot platform where users can train a chatbot using URLs. It combines seamless authentication, an intuitive UI/UX, and robust backend architecture to deliver an amazing experience."
  },
  {
    id: "exciledraw",
    image: "/exciledraw.png",
    header: "WeDraw",
    content: ["Monorepo", "Turborepo", "Next.js", "WebSocket", "Express", "Canva"],
    description: "A collaborative real-time drawing application inspired by Excalidraw. It enables users to create and edit drawings on a shared canvas with real-time synchronization. The application leverages WebSockets for instant updates, ensuring smooth and scalable real-time communication. Designed for efficiency, Exiledraw provides an interactive and seamless drawing experience."
  }
];

const Projects = () => {
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
          My Work
        </motion.h1>

        <div className="grid gap-8  ">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <CardsTwo
                image={project.image}
                header={project.header}
                content={project.content}
                description={project.description}
                onClick={() => console.log(`Clicked ${project.header}`)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;