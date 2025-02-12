import CardsTwo from "./Card2";


const Projects = () => {
    return (<div className="py-6 flex flex-col gap-5">
       <h1 className="py-2 text-lg font-semibold">My Work</h1>
        <CardsTwo image="/beyoundChats.png" header="Beyoungchat" content={["nextjs","Typescript", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Cheerio"  ]} description="BeyondChat is a dynamic chatbot platform where users can train a chatbot using URLs. It combines seamless authentication, an intuitive UI/UX, and robust backend architecture to deliver an amazing experience." onClick={()=>{}} />
        <CardsTwo image="/beyoundChats.png" header="Beyoungchat" content={["nextjs","Typescript", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Cheerio"  ]} description="BeyondChat is a dynamic chatbot platform where users can train a chatbot using URLs. It combines seamless authentication, an intuitive UI/UX, and robust backend architecture to deliver an amazing experience." onClick={()=>{}} />
        <CardsTwo image="/beyoundChats.png" header="Beyoungchat" content={["nextjs","Typescript", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Cheerio"  ]} description="BeyondChat is a dynamic chatbot platform where users can train a chatbot using URLs. It combines seamless authentication, an intuitive UI/UX, and robust backend architecture to deliver an amazing experience." onClick={()=>{}} />
        <CardsTwo image="/beyoundChats.png" header="Beyoungchat" content={["nextjs","Typescript", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Cheerio"  ]} description="BeyondChat is a dynamic chatbot platform where users can train a chatbot using URLs. It combines seamless authentication, an intuitive UI/UX, and robust backend architecture to deliver an amazing experience." onClick={()=>{}} />

    </div>);
}

export default Projects;