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
import Linux from "@/public/devops/Linux";
import Nginx from "@/public/devops/Nginx";
import Ubuntu from "@/public/devops/Ubuntu";
import Vercel from "@/public/devops/Vercel";
import Ethereum from "@/public/Web3/Etherium";
import HardHat from "@/public/Web3/Hardhat";
import Solana from "@/public/Web3/Solana";
const data = [
    {
        title: "Language", content: [
            <JSsvg height={40} widht={40} />,
            <TSsvg height={40} widht={40} />,
            <Java h={40} w={40} />,
            <Solidity height={40} width={40} />,
            <Rust height={40} width={40} fill="#fafafa" />




        ]
    },
    {
        title: "Frontend", content: [
            <React height={40} width={40} />,
            <Next height={40} width={40} />,
            <Tailwind height={40} width={40} />,
            <Html height={40} width={40} />,
            <Css height={40} width={40} />
        ]
    },
    {
        title: "Backend", content: [
            <Nodejs height={40} width={40} />,
            <Express height={40} width={40} />,
            <Prisma height={40} width={40} />,
            <Graphql height={40} width={40} />
        ]
    },
    { title: "Database", content: [<Mongodb height={40} width={40} />, <Postgres height={40} width={40} />, <Sql height={40} width={40} />, <Firebase height={40} width={40} />] },
    { title: "DevOps ", content: [
        <Aws height={40} width={40} />, <DigitalOcean height={40} width={40}/>, <Docker height={40} width={40}/>, <Git height={40} width={40}/> , <Linux height={40} width={40}/>, <Nginx height={40} width={40}/> , <Ubuntu height={40} width={40}/>, <Vercel height={40} width={40}/>
    ] },
    {title:"Web3" , content:[<Ethereum height={40} widht={40}/> , <HardHat height={40} widht={40} /> , <Solana height={40} widht={40}/>] }
]

const Skills = () => {
    return (<div className="py-6">
        <Timeline data={data} />
    </div>);
}

export default Skills;