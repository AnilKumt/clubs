import React from "react";

const MemberCard = ({ name, role, image, linkedin }) => (
  <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center w-64">
    <img
      src={image}
      alt={name}
      className="w-20 h-20 rounded-full object-cover mb-4"
    />
    <h4 className="text-lg font-semibold">{name}</h4>
    <p className="text-gray-600 text-sm text-center">{role}</p>
    <a
      href={linkedin}
      target="_blank"
      rel="noreferrer"
      className="mt-2 text-blue-600 underline"
    >
      LinkedIn
    </a>
  </div>
);

export default MemberCard;
