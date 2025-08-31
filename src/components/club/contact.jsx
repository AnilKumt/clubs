import React from "react";

const Contact = ({ email, socials }) => (
  <section className="flex flex-col items-center p-10 bg-white text-gray-800">
    <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
    <p className="mb-4">
      Reach out at: <a href={`mailto:${email}`} className="text-blue-600">{email}</a>
    </p>
    <div className="flex gap-6">
      {socials.map((s, i) => (
        <a key={i} href={s.link} target="_blank" rel="noreferrer"
           className="underline hover:text-[oklch(55.3%_0.195_38.402)]">
          {s.platform}
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
