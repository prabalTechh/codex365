import IntroData from "./ui/IntroData";

const Introduction = () => {
    return (<div className="mt-5">
        <div className="p-4">
            <h4>1. Who i am ?</h4>
            <IntroData children="Hi, I’m Prabal Chanpuria,B-Tech(CSE) graduate year 2023, I am a passionate web developer specializing in [Frontend/Backend/Full-Stack Development/Web3]." />
            <h4>2. My Expertise?</h4>
            <IntroData children="I have hands-on experience with technologies like [React, Next.js, Node.js, MongoDB, etc.] and a knack for building seamless, responsive user interfaces and efficient backend systems." />
            <h4>3. What i Do</h4>
            <IntroData children="I thrive on solving complex problems and crafting solutions that enhance user experience while maintaining high performance and scalability." />
            <h4>4. My Passion?</h4>
            <IntroData children="I’m driven by a love for technology and the endless possibilities it offers to shape the digital world." />
            <h4>5. Call to Action?</h4>
            <IntroData children="Check out my portfolio to see my latest projects, or let’s connect to discuss how I can bring your ideas to life!" />
        </div>

    </div>);
}

export default Introduction;