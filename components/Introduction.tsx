import { Card, CardContent } from "@/components/ui/card";
import IntroData from "./ui/IntroData";

const introSections = [
  {
    id: 1,
    title: "Who I Am",
    content: "Hi, I'm Prabal Chanpuria, a B.Tech (CSE) graduate from the class of 2023. I am a passionate web developer specializing in Frontend, Backend, Full-Stack Development, Web3, and DevOps."
  },
  {
    id: 2,
    title: "My Expertise",
    content: "I have hands-on experience with technologies like React, Next.js, Node.js, MongoDB, and more. I specialize in building seamless, responsive user interfaces and efficient backend systems."
  },
  {
    id: 3,
    title: "What I Do",
    content: "I thrive on solving complex problems and crafting solutions that enhance user experience while maintaining high performance and scalability."
  },
  {
    id: 4,
    title: "My Passion",
    content: "I'm driven by a love for technology and the endless possibilities it offers to shape the digital world."
  },
  {
    id: 5,
    title: "Let's Connect",
    content: "Check out my portfolio to see my latest projects, or let's connect to discuss how I can bring your ideas to life!"
  }
];

const Introduction = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <Card className="bg-card/50 border-border/50 backdrop-blur-sm ">
        <CardContent className="p-6 space-y-2 ">
          {introSections.map(({ id, title, content }) => (
            <div key={id} className="group hover:bg-gradient-to-r hover:from-emerald-500/10 hover:to-cyan-500/10 dark:hover:from-emerald-500/5 dark:hover:to-cyan-500/5 rounded-xl p-4 transition-all duration-200 border border-transparent hover:border-emerald-500/20">
              <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                {title}
              </h2>
              <IntroData >
                {content}
              </IntroData>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Introduction;