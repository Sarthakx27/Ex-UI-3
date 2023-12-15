import React from "react";

const LandingHeader = () => {
  return (
    <div className="w-full text-white font-display bg-blue-950 grid lg:grid-cols-2 place-items-center py-10 lg:py-24 gap-10">
      <div className=" w-11/12 lg:w-4/6 text-center lg:text-start lg:ml-auto px-4">
        <h1 className=" text-2xl lg:text-4xl font-semibold w-10/12 leading-0.5 lg:mx-0 mx-auto">
          Master of Science in Business Analytics
        </h1>
        <p className=" text-gray-200 my-3 lg:my-6 w-11/12 lg:text-sm md:text-sm text-xs leading-5 md:leading-normal lg:leading-normal lg:mx-0 mx-auto">
          Pursue an MS in the USA without a GRE or TOEFL from the University of
          Arizona. This master of science in business analytics program lets you
          save 55+ Lakhs INR, get a 3-year STEM OPT visa, making it an ideal
          study abroad program.
        </p>
        <p className=" text-sm mb-6">Online + On-Campus in USA • 18 Months</p>
        <div className="lg:flex flex-col-2 gap-2 lg:gap-4 w-full md:w-1/2 md:mr-auto md:ml-auto lg:ml-0 lg:mr-auto lg:w-11/12 mb-5">
          <button className="rounded-lg lg:mb-0 mb-2 border-2 border-amber-400 text-blue-950  font-semibold w-full 
          tracking-wider py-3 hover:bg-transparent bg-amber-400 hover:text-yellow-500 transition duration-500 lg:text-base text-xs  ">
            Download Brochure
          </button>
          <button className="rounded-lg border-2 border-amber-400 text-amber-400 font-semibold w-full 
          tracking-wider py-3 bg-transparent hover:bg-amber-400 hover:text-blue-950  transition duration-500 lg:text-base text-xs  ">
            Apply Now
          </button>
        </div>
          <h3 className="mb-5">Application Closes 20th Dec 2023</h3>
          <p>Enquire: 080-6945-1380</p>
      </div>
      <div className=" w-11/12 lg:w-4/6 lg:mr-auto">
        <img className=" rounded-lg"
          src="	https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/eller_collage_banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingHeader;
