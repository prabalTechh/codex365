import CardsTwo from "./Card2";


const Projects = () => {
    return (<div className="py-6 flex flex-col gap-8">
        <h1 className="py-2 text-lg font-semibold">My Work</h1>
        <CardsTwo image="/eshop.png" header="E-shop" content={["nextjs", "Typescript", "MongoDb", "Prisma", "nextAuth", "Stripe",]} description="
Built a feature-rich ecommerce platform from scratch using Next.js, React, TypeScript, Tailwind CSS, Prisma, and MongoDB. Designed a dynamic frontend, implemented secure user authentication, optimized database queries, and deployed the application for production. This project showcases expertise in full-stack development, scalable architecture, and modern web technologies." onClick={() => { }} />
        <CardsTwo image="/paytm.png" header="Payment App" content={["Reactjs", "Typescript", "Express", "Mongodb", "Regex",]} description="A full-stack application mimicking core functionalities of Paytm, built using modern technologies for backend and frontend development. The project ensures security, efficiency, and user-centric design." onClick={() => { }} />
        <CardsTwo image="/void.png" header="Second Brain (Void)" content={["Reactjs", "Vite", "Typescript", "Express", "MongoDb"]} description="A digital content storage system designed to help users organize and retain valuable information. It enables seamless content management by allowing users to store information from multiple sources like Twitter, YouTube, and Google Docs in a centralized place. With efficient data retrieval and a user-friendly interface, Second Brain streamlines knowledge management and enhances productivity." onClick={() => { }} />
        <CardsTwo image="/beyoundChats.png" header="Beyoungchat" content={["nextjs", "Typescript", "Express", "PostgreSQL", "Prisma ORM", "Docker", "Cheerio"]} description="BeyondChat is a dynamic chatbot platform where users can train a chatbot using URLs. It combines seamless authentication, an intuitive UI/UX, and robust backend architecture to deliver an amazing experience." onClick={() => { }} />
        <CardsTwo image="/exciledraw.png" header="WeDraw" content={["Monorepo" , "Turborepo" , "Next.js" , "WebSocket" , "Express" , "Canva"]} description="A collaborative real-time drawing application inspired by Excalidraw. It enables users to create and edit drawings on a shared canvas with real-time synchronization. The application leverages WebSockets for instant updates, ensuring smooth and scalable real-time communication. Designed for efficiency, Exiledraw provides an interactive and seamless drawing experience." onClick={()=>{}} />
    </div>);
}

export default Projects;