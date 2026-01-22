import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Stats from "./components/Stats";
import Tools from "./components/Tools";
import Bonuses from "./components/Bonuses";
import Certificate from "./components/Certificate";
import FAQ from "./components/FAQ";
import FooterCTA from "./components/FooterCTA";
import StickyCTA from "./components/StickyCTA";
import Mentor from "./components/Mentor";
import { useState } from "react";
import RegisterModal from "./components/RegisterModal";


export default function App() {
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <>
      <Navbar onEnroll={() => setOpenRegister(true)} />
      <Hero onEnroll={() => setOpenRegister(true)} />
      <Mentor onEnroll={() => setOpenRegister(true)}/>
      <Trust />
      <Stats />
      <Tools />
      <Bonuses />
      <Certificate />
      <FAQ />
      <FooterCTA onEnroll={() => setOpenRegister(true)} />
      <RegisterModal
        open={openRegister}
        onClose={() => setOpenRegister(false)}
      />
      <StickyCTA onEnroll={() => setOpenRegister(true)}/>
    </>
  );
}
