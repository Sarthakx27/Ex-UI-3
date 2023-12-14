import React from "react";

const LandingHeader = () => {
  return (
    <div className="w-full text-white font-display bg-blue-950 grid grid-cols-2 place-items-center py-24 gap-10">
      <div className=" w-4/6 ml-auto">
        <h1 className=" text-4xl font-semibold w-10/12 leading-0.5">
          Master of Science in Business Analytics
        </h1>
        <p className=" text-gray-200 my-6 w-11/12 text-sm">
          Pursue an MS in the USA without a GRE or TOEFL from the University of
          Arizona. This master of science in business analytics program lets you
          save 55+ Lakhs INR, get a 3-year STEM OPT visa, making it an ideal
          study abroad program.
        </p>
        <p className=" text-sm mb-6">Online + On-Campus in USA • 18 Months</p>
        <div className="flex flex-col-2 gap-4 w-11/12 mb-5">
          <button className="rounded-lg border-2 border-amber-400 text-blue-950  font-semibold w-full tracking-wider py-3 hover:bg-transparent bg-amber-400 hover:text-yellow-500 transition duration-500   ">
            Download Brochure
          </button>
          <button className="rounded-lg border-2 border-amber-400 text-amber-400 font-semibold w-full tracking-wider py-3 bg-transparent hover:bg-amber-400 hover:text-blue-950  transition duration-500   ">
            Apply Now
          </button>
        </div>
          <h3 className="mb-5">Application Closes 20th Dec 2023</h3>
          <p>Enquire: 080-6945-1380</p>
      </div>
      <div className="w-4/6 mr-auto">
        <img className=" rounded-xl"
          src="	https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/eller_collage_banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingHeader;
