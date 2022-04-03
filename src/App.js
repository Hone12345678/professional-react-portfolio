import React, { useState } from "react";
import About from "./components/About";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  const [componantNav, setComponantNav] = useState("about");
  const NavRender = () => {
    switch (componantNav) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return "";
    }
  };
  return (
    <div>
      <Header componantNav={componantNav} setComponantNav={setComponantNav}/>
      <main>
        <NavRender />

    
       
      </main>
     
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}



export default App;
