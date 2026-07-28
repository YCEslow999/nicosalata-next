import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import Why from "./components/Why.jsx";
import Help from "./components/Help.jsx";
import WhoIHelp from "./components/WhoIHelp.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Carousel from "./components/Carousel.jsx";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Why />
    <Help />
    <WhoIHelp />
    <Carousel />
    <Contact />
    <Footer />
    </>
    );
}
