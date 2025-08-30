import React from "react";
import Hero from "./club/Hero";
import Work from "./club/Work";
import Team from "./club/Team";
import Contact from "./club/contact";
import Outro from "./club/Outro";
import { bitsquard } from "./data/club";

const Bitsquad = () => {
  return (
    <div className="font-sans">
      <Hero logo={bitsquard.logo} motto={bitsquard.motto} quote={bitsquard.quote} colour="#FBBC04" text="black"/>
      <Work helpAreas={bitsquard.helpAreas} techStack={bitsquard.techStack} projects={bitsquard.projects} />
      <Team lead={bitsquard.lead} coordinators={bitsquard.coordinators} subCoordinators={bitsquard.subCoordinators} colour="#FBBC04" text="black"/>
      <Contact email={bitsquard.contact.email} socials={bitsquard.contact.socials} />
      <Outro message={bitsquard.outro} colour="#FBBC04" text="black"/>
    </div>
  );
};

export default Bitsquad;
