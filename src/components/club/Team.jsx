import React from "react";

const Team = ({ lead, coordinators = [], subCoordinators = [], colour ,text}) => {
  return (
    <section
      id="team"
      className="min-h-screen flex text-white flex-col items-center justify-center py-16 px-6"
      style={{ backgroundColor: colour , color: text}}
    >
      <h2 className="text-4xl font-extrabold mb-12 tracking-wide drop-shadow-lg">
        Our Team
      </h2>

      {/* Lead */}
      {lead && (
        <div className="mb-16 text-center">
          <div className="relative w-44 h-44 mx-auto">
            <img
              src={lead.image}
              alt={lead.name}
              className="w-46 h-46 rounded-full object-cover shadow-2xl border-4 border-white"
            />
            <span className="absolute bottom-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow">
              Lead
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-4">{lead.name}</h3>
          <p className="text-gray-200">{lead.role}</p>
          {lead.linkedin && (
            <a
              href={lead.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-400 hover:text-blue-500 transition"
            >
              LinkedIn →
            </a>
          )}
        </div>
      )}

      {/* Coordinators */}
      {coordinators.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-6">Coordinators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {coordinators.map((coordinator, i) => (
              <div
                key={i}
                className="p-6 bg-gradient-to-br from-white to-gray-100 text-black rounded-2xl shadow-xl text-center transform transition hover:-translate-y-2 hover:shadow-2xl w-[300px]"
              >
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-40 h-40 mx-auto object-cover rounded-full mb-4 border-4 border-gray-200 shadow"
                />
                <h4 className="text-xl font-bold">{coordinator.name}</h4>
                <p className="text-gray-600">{coordinator.role}</p>
                {coordinator.linkedin && (
                  <a
                    href={coordinator.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-blue-500 hover:text-blue-700 transition"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Sub-Coordinators */}
      {subCoordinators.length > 0 && (
        <>
          <h3 className="text-2xl font-semibold mb-6">Sub-Coordinators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {subCoordinators.map((sub, i) => (
              <div
                key={i}
                className="p-6 w-[300px] bg-gradient-to-br from-white to-gray-100 text-black rounded-2xl shadow-xl text-center transform transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-40 h-40 mx-auto object-cover object-top rounded-full mb-4 border-4 border-gray-200 shadow"
                />
                <h4 className="text-xl font-bold">{sub.name}</h4>
                <p className="text-gray-600">{sub.role}</p>
                {sub.linkedin && (
                  <a
                    href={sub.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-blue-500 hover:text-blue-700 transition"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Team;
