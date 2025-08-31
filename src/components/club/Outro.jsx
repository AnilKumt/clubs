import React from "react";

const Outro = ({ message, colour,text}) => (
  <section className="flex justify-center items-center p-1 text-white" style={{ backgroundColor: colour,color:text }}>
    <p className="text-lg">{message}</p>
  </section>
);

export default Outro;
