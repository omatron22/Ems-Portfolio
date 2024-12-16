import React from "react"

const About: React.FC = () => {
  return (
    <section id="about" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-deep-black-blue to-gray-900 px-6">
      <h2 className="text-5xl font-clash font-bold text-neon-yellow mb-6">About Me</h2>

      <div className="max-w-3xl text-center">
        <p className="text-lg text-light-mist mb-6">
          Hey! I'm Em Moore, a passionate creator with a love for design, drafting, and 3D modeling. 
          My goal is to bring ideas to life through thoughtful composition and technical precision.
        </p>

        <p className="text-lg text-light-mist mb-6">
          I have a strong passion for creating engaging visual experiences and delivering compelling projects 
          in fields like design, engineering, and interactive media. Whether it's crafting sleek designs, 
          technical drafting, or immersive 3D models, I thrive on turning concepts into reality.
        </p>

        <p className="text-lg text-light-mist mb-6">
          In every project, I aim to challenge my creative boundaries and push for excellence. 
          Let's create something impactful together.
        </p>
      </div>

      <div className="flex space-x-6 mt-6">
        <a 
          href="#design"
          className="px-6 py-3 rounded-full font-clash bg-neon-yellow text-deep-black-blue hover:bg-light-mist hover:text-deep-black-blue transition-all shadow-md"
        >
          View My Design Work
        </a>
        <a 
          href="#drafting"
          className="px-6 py-3 rounded-full font-clash bg-neon-yellow text-deep-black-blue hover:bg-light-mist hover:text-deep-black-blue transition-all shadow-md"
        >
          See My Drafting Projects
        </a>
        <a 
          href="#modeling"
          className="px-6 py-3 rounded-full font-clash bg-neon-yellow text-deep-black-blue hover:bg-light-mist hover:text-deep-black-blue transition-all shadow-md"
        >
          Explore 3D Modeling
        </a>
      </div>
    </section>
  )
}

export default About
