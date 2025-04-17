import React from "react";

const Resume = () => {
  return (
    <div className="mt-10 md:mt-30 sm:mt-30 w-full md:flex sm:flex md:text-left sm:text-left"> 
      <button
        className="mt-16 md:mt-24 sm:mt-4 lg:mt-4 xl:-mt-6 bg-[#191825] p-3 font-semibold text-xm md:text-xs lg:text-xl border rounded shadow-md text-white hover:bg-white hover:text-black transition duration-300 ml-10 lg:ml-60 xl:ml-80"
        onClick={() => window.open("https://drive.google.com/file/d/16v4WCJzyBfyAH7TPR6zbAyUaW07JO8vh/view?pli=1")}
      >
        View Resume
      </button>
    </div>
  );
};

export default Resume;
