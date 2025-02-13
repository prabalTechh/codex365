import Image from "next/image";
import { Timeline } from "./ScrollContext";
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
// import Linux from "@/public/devops/Linux";
import Nginx from "@/public/devops/Nginx";
import Ubuntu from "@/public/devops/Ubuntu";
import Vercel from "@/public/devops/Vercel";
import Ethereum from "@/public/Web3/Etherium";
// import HardHat from "@/public/Web3/Hardhat";
import Solana from "@/public/Web3/Solana";
const data = [
    {
      title: "Language",
      content: [
        { icon: <JSsvg height={40} widht={40} />, name: "JavaScript" },
        { icon: <TSsvg height={40} widht={40} />, name: "TypeScript" },
        { icon: <Java h={40} w={40} />, name: "Java" },
        { icon: <Solidity height={40} width={40} />, name: "Solidity" },
        { icon: <Rust height={40} width={40} fill="#fafafa" />, name: "Rust" }
      ]
    },
    {
      title: "Frontend",
      content: [
        { icon: <React height={40} width={40} />, name: "React" },
        { icon: <Next height={40} width={40} />, name: "Next.js" },
        { icon: <Tailwind height={40} width={40} />, name: "Tailwind CSS" },
        { icon: <Html height={40} width={40} />, name: "HTML5" },
        { icon: <Css height={40} width={40} />, name: "CSS3" }
      ]
    },
    {
      title: "Backend",
      content: [
        { icon: <Nodejs height={40} width={40} />, name: "Node.js" },
        { icon: <Express height={40} width={40} />, name: "Express.js" },
        { icon: <Prisma height={40} width={40} />, name: "Prisma" },
        { icon: <Graphql height={40} width={40} />, name: "GraphQL" }
      ]
    },
    {
      title: "Database",
      content: [
        { icon: <Mongodb height={40} width={40} />, name: "MongoDB" },
        { icon: <Postgres height={40} width={40} />, name: "PostgreSQL" },
        { icon: <Sql height={40} width={40} />, name: "SQL" },
        { icon: <Firebase height={40} width={40} />, name: "Firebase" }
      ]
    },
    {
      title: "DevOps",
      content: [
        { icon: <Aws height={40} width={40} />, name: "AWS" },
        { icon: <DigitalOcean height={40} width={40}/>, name: "DigitalOcean" },
        { icon: <Docker height={40} width={40}/>, name: "Docker" },
        { icon: <Git height={40} width={40}/>, name: "Git" },
        { icon: <Nginx height={40} width={40}/>, name: "Nginx" },
        { icon: <Ubuntu height={40} width={40}/>, name: "Ubuntu" },
        { icon: <Vercel height={40} width={40}/>, name: "Vercel" }
      ]
    },
    {
      title: "Web3",
      content: [
        { icon: <Ethereum height={40} widht={40}/>, name: "Ethereum" },
        { icon: <Solana height={40} widht={40}/>, name: "Solana" }
      ]
    }
  ];

const Skills = () => {
    return (<div className="py-6">
        <Timeline data={data} />
    </div>);
}

export default Skills;