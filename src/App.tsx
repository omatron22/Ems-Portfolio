import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Design from "./sections/Design";
import Drafting from "./sections/Drafting";
import Modeling from "./sections/Modeling";
import About from "./sections/About";

const App: React.FC = () => {

  return (
    <div className="min-h-screen bg-deep-black-blue text-light-mist">
      <Navbar />
      <Home />
      <Design />
      <Drafting />
      <Modeling />
      <About />

      <footer className="py-8 text-center bg-deep-black-blue text-light-mist">
        <p>© 2024 Em Moore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
