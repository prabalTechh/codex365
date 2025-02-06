import Image from "next/image";
import { Timeline } from "./ScrollContext";
import { JSsvg } from "@/public/js";
import { TSsvg } from "@/public/ts";

const data = [
    {
        title: "Language", content: [
           <JSsvg height={40} widht={40} />,
           <TSsvg height={40} widht={40} />,
           <TSsvg height={40} widht={40} />,
           <TSsvg height={40} widht={40} />,
           <TSsvg height={40} widht={40} />,
           <TSsvg height={40} widht={40} />,

        ]
    },
    { title: "hey there ", content: ["anyways content is here"] },
    { title: "hey there ", content: ["anyways content is here"] },
    { title: "hey there ", content: ["anyways content is here"] },
    { title: "hey there ", content: ["anyways content is here"] },
]

const Skills = () => {
    return (<div>
        <Timeline data={data} />
    </div>);
}

export default Skills;