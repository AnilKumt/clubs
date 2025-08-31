import React from "react";
import Hero from "./club/Hero";
import Work from "./club/Work";
import Team from "./club/Team";
import Contact from "./club/contact";
import Outro from "./club/Outro";
import { datawork } from "./data/club";

const Datawork = () => {
  return (
    <div className="font-sans">
      <Hero logo={datawork.logo} motto={datawork.motto} quote={datawork.quote} colour="#4285F4" text="white"/>
      <Work helpAreas={datawork.helpAreas} techStack={datawork.techStack} projects={datawork.projects} />
      <Team lead={datawork.lead} coordinators={datawork.coordinators} subCoordinators={datawork.subCoordinators} colour="#4285F4"/>
      <Contact email={datawork.contact.email} socials={datawork.contact.socials} />
      <Outro message={datawork.outro} colour="#4285F4" />
    </div>
  );
};

export default Datawork;
