import { motion } from "framer-motion";
import { JSsvg } from "@/public/js";
import { TSsvg } from "@/public/ts";
import { Java } from "@/public/Java";
import Solidity from "@/public/Solidity";
import Rust from "@/public/Rust";
import React from "@/public/frontend/React";
import Next from "@/public/frontend/Next";
import Tailwind from "@/public/frontend/Tailwind";
import Html from "@/public/frontend/Html";
import Css from "@/public/frontend/Css";
import Nodejs from "@/public/backend/Nodejs";
import Express from "@/public/backend/Express";
import Prisma from "@/public/backend/Prisma";
import Graphql from "@/public/backend/Graphql";
import Mongodb from "@/public/database/Mongodb";
import Postgres from "@/public/database/Postgres";
import Sql from "@/public/database/Sql";
import Firebase from "@/public/database/Firebase";
import Aws from "@/public/devops/Aws";
import DigitalOcean from "@/public/devops/DigitalOcean";
import Docker from "@/public/devops/Docker";
import Git from "@/public/devops/Git";
import Nginx from "@/public/devops/Nginx";
import Ubuntu from "@/public/devops/Ubuntu";
import Vercel from "@/public/devops/Vercel";
import Ethereum from "@/public/Web3/Etherium";
import Solana from "@/public/Web3/Solana";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "Core languages I work with",
    skills: [
      { icon: <JSsvg height={32} width={32} />, name: "JavaScript", level: 95 },
      { icon: <TSsvg height={32} width={32} />, name: "TypeScript", level: 90 },
      { icon: <Java h={32} w={32} />, name: "Java", level: 85 },
      { icon: <Solidity height={32} width={32} />, name: "Solidity", level: 80 },
      { icon: <Rust height={32} width={32} fill="#fafafa" />, name: "Rust", level: 75 }
    ]
  },
  {
    title: "Frontend Development",
    description: "Modern web technologies",
    skills: [
      { icon: <React height={32} width={32} />, name: "React", level: 95 },
      { icon: <Next height={32} width={32} />, name: "Next.js", level: 90 },
      { icon: <Tailwind height={32} width={32} />, name: "Tailwind CSS", level: 92 },
      { icon: <Html height={32} width={32} />, name: "HTML5", level: 98 },
      { icon: <Css height={32} width={32} />, name: "CSS3", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    description: "Server-side technologies",
    skills: [
      { icon: <Nodejs height={32} width={32} />, name: "Node.js", level: 90 },
      { icon: <Express height={32} width={32} />, name: "Express.js", level: 88 },
      { icon: <Prisma height={32} width={32} />, name: "Prisma", level: 85 },
      { icon: <Graphql height={32} width={32} />, name: "GraphQL", level: 82 }
    ]
  },
  {
    title: "Databases",
    description: "Data storage solutions",
    skills: [
      { icon: <Mongodb height={32} width={32} />, name: "MongoDB", level: 88 },
      { icon: <Postgres height={32} width={32} />, name: "PostgreSQL", level: 85 },
      { icon: <Sql height={32} width={32} />, name: "SQL", level: 90 },
      { icon: <Firebase height={32} width={32} />, name: "Firebase", level: 80 }
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "Infrastructure and deployment",
    skills: [
      { icon: <Aws height={32} width={32} />, name: "AWS", level: 85 },
      { icon: <DigitalOcean height={32} width={32}/>, name: "DigitalOcean", level: 80 },
      { icon: <Docker height={32} width={32}/>, name: "Docker", level: 82 },
      { icon: <Git height={32} width={32}/>, name: "Git", level: 95 },
      { icon: <Nginx height={32} width={32}/>, name: "Nginx", level: 78 },
      { icon: <Ubuntu height={32} width={32}/>, name: "Ubuntu", level: 85 },
      { icon: <Vercel height={32} width={32}/>, name: "Vercel", level: 90 }
    ]
  },
  {
    title: "Web3 & Blockchain",
    description: "Decentralized technologies",
    skills: [
      { icon: <Ethereum height={32} width={32}/>, name: "Ethereum", level: 85 },
      { icon: <Solana height={32} width={32}/>, name: "Solana", level: 75 }
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.15 }}
    whileHover={{ scale: 1.02, y: -2 }}
    className="group relative bg-card/50 border border-border/50 rounded-xl p-4 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-200 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="flex-shrink-0">
        {skill.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground truncate">
          {skill.name}
        </h4>
        <div className="w-full bg-muted/50 rounded-full h-2 mt-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: index * 0.05 + 0.1, duration: 0.3, ease: "easeOut" }}
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 h-2 rounded-full"
          />
        </div>
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="space-y-12 pt-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 dark:from-emerald-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains of software development
        </p>
      </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.2 }}
            className="space-y-4"
          >
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.skills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index} 
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="text-center pt-6"
      >
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"></div>
          Continuously learning and expanding my skill set
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;