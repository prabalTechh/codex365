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
    <section className="max-w-4xl mx-auto mt-8">
      <Card>
        <CardContent className="p-6 space-y-6">
          {introSections.map(({ id, title, content }) => (
            <div key={id} className="group hover:bg-slate-50 rounded-lg p-4 transition-colors">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                {title}
              </h2>
              <IntroData>
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