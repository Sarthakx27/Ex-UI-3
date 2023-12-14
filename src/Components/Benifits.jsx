import React from "react";

const Benifits = () => {
  return (
    <>
      <div className="w-full font-display py-10">
        <div className="w-9/12 px-20 mx-auto">
        <h1 className=" text-3xl font-bold text-start ">Great Learning Advantage</h1>
        <p className=" py-5 text-sm tracking-wide text-gray-800">
        Learn from a comprehensive curriculum taught by world-class faculty. Get guidance on your learning journey, and access dedicated career support.
          </p>
         <div className="grid grid-cols-3 bg-gray-100 rounded-lg">
            <img className="rounded-xl" src="https://d1vwxdpzbgdqj.cloudfront.net/online-mentorship.jpg" alt="" />
            <div className=" col-span-2">
                <p className=" text-gray-600 py-3">DESIGNED FOR PROFESSIONALS/FRESHERS</p>
                <h1 className=" font-semibold text-xl">Learn while pursuing your career</h1>
                <ul className=" text-base text-start leading-6 list-disc pl-3 text-gray-800">
              <li className="py-2 tracking-wide">
              Hybrid mode of learning with first 6 months online and next 12 months on-campus in US with personalised mentorship
              </li>
              <li className="py-2 tracking-wide">
              Practical Insights from Industry Experts
              </li>
            </ul>
            </div>
         </div>

         <div className="grid grid-cols-3 mt-5 bg-gray-100 rounded-lg">
            <img className="rounded-xl" src="https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/program-support.jpg" alt="" />
            <div className=" col-span-2">
                <p className=" text-gray-600 py-3">STRUCTURED PROGRAM WITH GUIDANCE</p>
                <h1 className=" font-semibold text-xl">Networking and Program support</h1>
                <ul className=" text-base text-start leading-6 list-disc pl-3 text-gray-800">
              <li className="py-2 tracking-wide">
              Dedicated program manager to solve your queries
              </li>
              <li className="py-2 tracking-wide">
              Mentorship from experts to gain industry insights
              </li>
              <li>Interact with peers to grow your professional network</li>
            </ul>
            </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Benifits;
