import React from "react";

const Card = ({project}) => {
  return (
    <div className="max-w-xs md:max-w-md mx-auto rounded-lg shadow-md overflow-hidden 
                text-[#1A2421]
                backdrop-blur-lg
                [ w-full  md:w-5/12 p-8 md:p-10 lg:p-10 ]
                [ bg-gradient-to-b from-white/60 to-white/30 ]
                [ border-[1px] border-solid border-white border-opacity-30 ]
                [ shadow-black/70 shadow-2xl ]
                m-8
    ">
      <img
        className="w-full h-40 sm:h-56 object-cover object-center"
        src={project.image}
        alt="Project Image"
      />
      <div className="px-2 py-1">
        <h3 className="text-xl font-semibold mb-2">{project.heading}</h3>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap mb-2">
            {project.tech.map((e)=>{
                return(
                    <span className="bg-lightblack text-terminal rounded-full px-2 py-1 text-sm font-semibold mr-2 mb-2">
            {e}
          </span>
                )
            })}
        </div>
        <div className="flex justify-between">
          <a
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
