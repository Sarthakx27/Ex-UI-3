import React from "react";

const Benifits = () => {
  return (
    <>
      <div className="w-full font-display py-10">
        <div className="w-11/12  md:w-9/12 lg:w-9/12 px-10 lg:px-20 mx-auto">
          <h1 className="text-center lg:text-start text-xl md:text-3xl lg:text-3xl font-bold mb-10 lg:mb-0">
            Great Learning Advantage
          </h1>
          <p className="hidden lg:block py-5 text-sm tracking-wide text-gray-800">
            Learn from a comprehensive curriculum taught by world-class faculty.
            Get guidance on your learning journey, and access dedicated career
            support.
          </p>
          <div className="grid md:w-11/12 mt-8 md:mx-auto lg:grid-cols-3 shadow-lg bg-gray-100 rounded-lg">
            <img
              className="rounded-xl col-span-2 lg:col-span-1 lg:w-auto w-[20rem] md:w-[32rem]"
              src="https://d1vwxdpzbgdqj.cloudfront.net/online-mentorship.jpg"
              alt=""
            />
            <div className="px-5 py-4 lg:py-0 lg:px-0 col-span-2">
              <p className=" text-gray-600 py-2 md:text-base lg:text-base text-sm lg:py-3">
                DESIGNED FOR PROFESSIONALS/FRESHERS
              </p>
              <h1 className=" font-semibold md:text-xl lg:text-xl text-base">
                Learn while pursuing your career
              </h1>
              <ul className=" md:text-base lg:text-base text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">
                  Hybrid mode of learning with first 6 months online and next 12
                  months on-campus in US with personalised mentorship
                </li>
                <li className="py-2 tracking-wide">
                  Practical Insights from Industry Experts
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:w-11/12 mt-8 md:mx-auto lg:grid-cols-3 shadow-lg bg-gray-100 rounded-lg">
            <img
              className="rounded-xl col-span-2 lg:col-span-1 lg:w-auto w-[20rem] md:w-[32rem]"
              src="https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/program-support.jpg"
              alt=""
            />
            <div className="px-5 py-4 lg:py-0 lg:px-0 col-span-2">
              <p className=" text-gray-600 py-2 md:text-base lg:text-base text-sm lg:py-3">
                STRUCTURED PROGRAM WITH GUIDANCE
              </p>
              <h1 className=" font-semibold md:text-xl lg:text-xl text-base">
                Networking and Program support
              </h1>
              <ul className=" md:text-base lg:text-base text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">
                  Dedicated program manager to solve your queries
                </li>
                <li className="py-2 tracking-wide">
                  Mentorship from experts to gain industry insights
                </li>
                <li className="py-2 tracking-wide">
                  Interact with peers to grow your professional network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benifits;
