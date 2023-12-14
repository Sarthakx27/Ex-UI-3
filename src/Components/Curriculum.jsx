import React from "react";

const Curriculum = () => {
    
  return (
    <>
      <div className="w-full font-display py-10">
      <div className="w-9/12 px-20 mx-auto">
          <h1 className=" text-3xl font-bold text-start ">Curriculum</h1>
          <div className=" py-5 flex gap-4">
            <p className=" text-sm tracking-wide text-gray-800">
              Pursue a MS in Business Analytics in the USA without a GRE or GMAT
              from Eller School at University of Arizona. This Masters in BA
              program lets you save 55+ Lakhs INR, get a 3-year STEM OPT visa,
              making it an ideal study abroad program.
            </p>
            <button
            className=" flex items-center text-center justify-center gap-2 rounded-lg border-2 border-transparent text-white hover:border-blue-700 
          font-semibold w-1/3 mx-auto tracking-wider hover:bg-transparent bg-blue-700 hover:text-blue-700 transition duration-500   "
          >
            Download Brochure
          </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Curriculum;
