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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-16"
      >
        {/* Enhanced Header Section */}
        <motion.div 
          variants={headerVariants}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl  font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            My Work
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing full-stack development, modern technologies, and innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group"
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

        {/* Call to Action */}
        <motion.div 
          variants={itemVariants}
          className="text-center pt-8"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer group">
            <span className="text-sm font-medium">View more projects</span>
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

export default Projects;