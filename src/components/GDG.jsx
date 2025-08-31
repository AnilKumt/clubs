import React from "react";
import Hero from "./club/Hero";
import Work from "./club/Work";
import Team from "./club/Team";
import Contact from "./club/contact";
import Outro from "./club/Outro";
import { gdgData } from "./data/club";

const GDG = () => {
  return (
    <div className="font-sans">
      <Hero logo={gdgData.logo} motto={gdgData.motto} quote={gdgData.quote} colour="oklch(55.3% 0.195 38.402)" text="white"/>
      <Work helpAreas={gdgData.helpAreas} techStack={gdgData.techStack} projects={gdgData.projects} />
      <Team lead={gdgData.lead} coordinators={gdgData.coordinators} subCoordinators={gdgData.subCoordinators} colour="oklch(55.3% 0.195 38.402)"/>
      <Contact email={gdgData.contact.email} socials={gdgData.contact.socials} />
      <Outro message={gdgData.outro} olour="oklch(55.3% 0.195 38.402)"/>
    </div>
  );
};

export default GDG;
