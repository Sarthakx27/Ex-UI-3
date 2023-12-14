import React from "react";

import Carousel from "react-elastic-carousel";

const Fees = () => {
  return (
    <>
      <div className="w-full font-display py-10 bg-orange-100 pb-10">
        <div className="w-9/12 px-20 mx-auto">
          <h1 className=" text-3xl font-bold text-center ">
            Fees and Application Details
          </h1>
          <div className=" text-center flex flex-col justify-center items-center align-middle mx-auto w-3/5 bg-white shadow-lg px-10 py-12 mt-12">
            <h1 className="text-xl font-semibold text-gray-700 mb-7">
              MASTER OF SCIENCE IN BUSINESS ANALYTICS
            </h1>
            <h1 className="text-xl font-semibold text-gray-700 mb-1">
              USD 37,000*
            </h1>
            <p className=" text-sm text-gray-700">
              *Additional Taxes Applicable
            </p>
            <p className=" text-sm text-gray-700 py-5">
              *Save INR 55+ Lakhs as compared to full-time US master’s
            </p>
            <h1 className=" text-lg text-gray-700 mb-7">
              Earn Master’s Degree from
            </h1>
            <img
              className="mb-6"
              src="https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/eller_collage_logo.png"
              alt=""
            />
            <ul className=" text-base text-start leading-6 mb-7 list-disc pl-3 text-gray-800">
              <li className="py-2 tracking-wide">18 Months</li>
              <li className="py-2 tracking-wide">
                Hybrid mode of learning with first 6 months online and next 12
                months on-campus in US
              </li>
              <li className="py-2 tracking-wide">
                Comprehensive curriculum with hands-on learning and mentorship
                sessions
              </li>
              <li className="py-2 tracking-wide">
                Quick application with no additional tests or prerequisites
              </li>
              <li className="py-2 tracking-wide">
                Globally recognized Master’s degree from the University of
                Arizona
              </li>
            </ul>
            <button
              className=" flex items-center text-center justify-center gap-2 py-3 rounded-lg border-2 border-transparent text-white hover:border-blue-700 
          font-semibold w-1/3 mx-auto tracking-wider hover:bg-transparent bg-blue-700 hover:text-blue-700 transition duration-500   "
            >
              Apply Now
            </button>
          </div>
          <p className="py-5 text-center text-sm tracking-wide text-gray-800">
            We provide flexible financing options through our finance partners,
            Gyandhan and Liquiloans.
          </p>
          <div className="flex w-1/2 mx-auto gap-5 items-center justify-center align-middle">
            <img
              className=" w-1/4"
              src="https://d1vwxdpzbgdqj.cloudfront.net/srm-university/gyandhan.png"
              alt=""
            />
            <img
              className=" w-1/3"
              src="https://d1vwxdpzbgdqj.cloudfront.net/learning-partners/liquiloans.png"
              alt=""
            />
          </div>

          {/* APPLICATION PROCESS */}
          <h1 className=" text-3xl mt-10 font-bold text-center mb-8">
            Application Process
          </h1>
          <div className="grid grid-cols-4 gap-5 place-items-center mt-3 mb-5">
            <div className="grid grid-cols-4 shadow-md place-items-start h-[11rem] px-4 py-4 rounded-lg bg-white">
              <div className="px-5 py-3 items-center align-middle flex justify-center bg-blue-700 text-white rounded-full text-center">
                1
              </div>
              <div className=" col-span-3">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Apply Online
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Complete filling a fast and easy online application form. No
                  additional tests or prerequisites are needed to apply.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 shadow-md place-items-start h-[11rem] px-4 py-4 rounded-lg bg-white">
              <div className="px-5 py-3 items-center align-middle flex justify-center bg-blue-700 text-white rounded-full text-center">
                2
              </div>
              <div className=" col-span-3">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Pre-screening
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Our team will make contact with you by phone to confirm your
                  eligibility for the program.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 shadow-md place-items-start h-[11rem] px-4 py-4 rounded-lg bg-white">
              <div className="px-5 py-3 items-center align-middle flex justify-center bg-blue-700 text-white rounded-full text-center">
                3
              </div>
              <div className=" col-span-3">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Application Assessment
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  The Admissions team will assess your application and provide a
                  timely response.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 shadow-md place-items-start h-[11rem] px-4 py-4 rounded-lg bg-white">
              <div className="px-5 py-3 items-center align-middle flex justify-center bg-blue-700 text-white rounded-full text-center">
                4
              </div>
              <div className=" col-span-3">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Join The Program
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  If selected, you will receive an acceptance letter with
                  instructions on how to pay and join the program.
                </p>
              </div>
            </div>
          </div>
          <p className="py-2 text-sm  text-gray-700">
            Great Learning provides end-to-end support in applying to the
            University of Arizona and also in the US visa application process
            during the first year.
          </p>

          {/* Who is this program for? */}
          <h1 className=" text-3xl mt-24 font-bold text-start mb-8">
            Who is this program for?
          </h1>
          <div className="grid grid-cols-3 gap-5 place-items-center">
            <div className="relative w-full">
              <img
                className=" rounded-xl z-0"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/fresher.jpg"
                alt=""
              />
              <div className=" z-20 absolute top-1/2 left-1/4 bg-cyan-400 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  src="https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/curated-jobs-icon.svg"
                  alt=""
                />
              </div>
              <div className=" z-10 bg-white rounded-xl absolute top-1/2 mt-5 py-10 px-5 left-1/4 shadow-md h-[20rem]">
                <h1 className="text-lg font-semibold text-gray-700">
                  Early Career Professionals
                </h1>
                <p className="mt-4">
                  Young, early-career professionals looking to go abroad and
                  master information-driven innovation with knowledge of the
                  latest information methods.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className=" rounded-xl z-0"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/mid-lvl.jpg"
                alt=""
              />
              <div className=" z-20 absolute top-1/2 left-1/4 bg-green-400 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  src="https://d1vwxdpzbgdqj.cloudfront.net/aifl-intl/professions-and-jobs.svg"
                  alt=""
                />
              </div>
              <div className=" z-10 bg-white rounded-xl absolute top-1/2 mt-5 py-10 px-5 left-1/4 shadow-md h-[20rem]">
                <h1 className="text-lg font-semibold text-gray-700">
                  Mid & Senior Level Professionals
                </h1>
                <p className="mt-4">
                  Mid and senior-level professionals who are looking to go
                  abroad or learn online and stay up-to-date with the latest
                  information management skills needed for success in the
                  digital world.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                className=" rounded-xl z-0"
                src="https://d1vwxdpzbgdqj.cloudfront.net/aifl-intl/strategy_program_image.png"
                alt=""
              />
              <div className=" z-20 absolute top-1/2 left-1/4 bg-red-400 rounded-full w-12 h-12 flex items-center justify-center">
                <img
                  src="https://d1vwxdpzbgdqj.cloudfront.net/aifl-intl/lead-icon.svg"
                  alt=""
                />
              </div>
              <div className=" z-10 bg-white rounded-xl absolute top-1/2 mt-5 py-10 px-5 left-1/4 shadow-md h-[20rem]">
                <h1 className="text-lg font-semibold text-gray-700">
                  Working Professionals
                </h1>
                <p className="mt-4">
                  Professionals who wish to learn online without quitting their
                  job and transition to an information management career with
                  industry-ready skills and knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* DEADLINE */}
          <div className="mt-72 flex justify-between">
            <div className="w-1/2">
              <h1 className="text-3xl font-bold text-start mb-8">
                Upcoming Application Deadline
              </h1>
              <p className="py-2 text-sm  text-gray-700 tracking-wider">
                Our admissions close once the requisite number of participants
                enroll for the upcoming batch . Apply early to secure your
                seats.
              </p>
            </div>
            <div className="w-1/3 mt-5">
              <button
                className=" flex items-center text-center justify-center gap-2 py-3 rounded-lg border-2 border-transparent text-white hover:border-blue-700 
          font-semibold w-1/2 mx-auto tracking-wider hover:bg-transparent bg-blue-700 hover:text-blue-700 transition duration-500   "
              >
                Apply Now
              </button>
              <h1 className=" text-xl text-center mt-2 font-bold mb-8">
                Deadline: 20th Dec 2023
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* BATCH START DATE */}

      <div className="w-full font-display py-16 pb-10">
        <div className="w-9/12 mx-auto">
          <h1 className=" text-3xl font-bold text-center ">Batch Start Date</h1>
          <div className="w-1/2 mx-auto">
            <div className="w-1/3 mx-auto flex flex-col justify-center align-middle items-center border-2 border-gray-500 rounded-md mt-10 py-7">
              <img
                src="https://d1vwxdpzbgdqj.cloudfront.net/icons/cities/hybrid-format.svg"
                alt=""
              />
              <h1 className="text-lg font-semibold text-gray-700 mt-3">
                Hybrid
              </h1>
              <p className="mt-4 border-t-2 border-gray-500 pt-2">
                To be announced
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="w-full font-display py-16 pb-10 bg-blue-200">
        <div className="w-4/5 px-20 mx-auto">
          <div className="grid grid-cols-3 gap-3 place-items-start">
            <div>
              <h1 className=" text-3xl font-bold text-start ">
                Still have queries?
              </h1>
              <h1 className=" text-3xl font-bold text-start my-3 ">
                Contact Us
              </h1>
              <p className="text-gray-700">
                Please fill in the form and an expert from the admissions office
                will call you in the next 4 working hours. You can also reach
                out to us at{" "}
                <span>
                  <a
                    href="mailto: msba-uoa@greatlearning.in"
                    class="text-blue-600"
                  >
                    {" "}
                    msba-uoa@greatlearning.in
                  </a>
                </span>{" "}
                or{" "}
                <span className=" text-blue-600">
                  <a href="tel:080-6945-1380">080-6945-1380</a>.
                </span>
              </p>
            </div>
            <div className="col-span-2 ml-10">
              <form className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 mb-8 place-items-center w-full gap-5">
                <div className=" mb-5">
                  <label htmlFor="name" className="block">
                    Name
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border  border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-4/5 md:w-3/4 lg:w-full"
                    type="text"
                    name="name" //name should me matched to state's name && name given in schema
                    placeholder="Name"
                    id="name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className=" mb-5">
                  <label htmlFor="email" className="block">
                    E-mail
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border  border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-4/5 md:w-3/4 lg:w-full"
                    type="text"
                    name="email"
                    placeholder="E-mail"
                    id="email"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="mobilenumber" className="block">
                    Mobile Number
                  </label>
                  <input
                    className="bg-gray-100 appearance-none border w-4/5 md:w-3/4 lg:w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    name="mobilenumber"
                    placeholder="Mobile Number"
                    id="mobilenumber"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block">
                    Work experience in years
                  </label>
                  <select
                    className="bg-gray-100 appearance-none border w-4/5 md:w-3/4 lg:w-full border-gray-400  mt-2 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    required
                    name="state"
                    id="state"
                    placeholder="Work experience in years"
                  >
                    <option disabled={true} value="">
                    Work experience in years
                    </option>
                    <option value="College Student">Currently a college student</option>
                    <option value="0 Years">0 Years</option>
                    <option value="<1 Year">{"<"}1 Year</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="2-3 Years">2-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5-8 Years">5-8 Years</option>
                    <option value="8-12 Years">8-12 Years</option>
                    <option value="12-15 Years">12-15 Years</option>
                    <option value=">15 Years">{">"}15 Years</option>
                  </select>
                </div>
                <p className=" col-span-2 text-gray-700 text-center w-full text-sm">
                  By submitting the form, you agree to our Terms and Conditions
                  and our Privacy Policy.
                </p>
                <div className="w-1/3 col-span-2">
                  <button
                    className=" flex items-center text-center justify-center gap-2 py-3 rounded-lg border-2 border-transparent text-white hover:border-blue-700 
          font-semibold w-full ml-auto tracking-wider hover:bg-transparent bg-blue-700 hover:text-blue-700 transition duration-500   "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Related Blogs */}
      <div className="w-full font-display py-16 pb-10">
        <div className="w-4/5 px-20 mx-auto">
        <h1 className=" text-3xl font-bold text-start mb-10">Browse Related Blogs</h1>

        <Carousel itemsToShow={4} >
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/29123341/iStock-922512798.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                Top 5 Reasons to choose BBA
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/04/25184855/iStock-157289996.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                Which course is better, MBA or PGDM?
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="	https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/02/28184203/iStock-922512798.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                Leadership Theories that every manager must master in 2022
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="	https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/09/14192834/iStock-915451034.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                MBA Salary in India| How much does an MBA Professional Earn?
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="	https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/09/10185933/iStock-656121724.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                Top 7 Career Options after MBA in Marketing -2023
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="	https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/30142614/social-media-1233873_1920.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                What is Moment Marketing?
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="	https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/11/09105321/iStock-1182142882.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                Importance of Digital Marketing for Businesses in 2023
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/25102855/iStock-1204099658-1.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                The Fundamentals of Digital Marketing
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/11/09105321/iStock-1182142882.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                10 Types of Management Courses in India
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
        <div className="grid grid-cols-5 shadow-xl place-items-center h-[9rem] px-4 py-4 rounded-lg bg-white border mx-1">
              <div className="col-span-2 items-center align-middle flex justify-center">
                <img className=" rounded-md" src="https://d1m75rqqgidzqn.cloudfront.net/wp-data/2020/04/08134238/shutterstock_1139135546-1-1.jpg" alt="" />
              </div>
              <div className="ml-2 col-span-3">
                <h1 className=" text-xs font-semibold text-gray-700 tracking-wide w-full">
                Top 13 Email Marketing Tools in Industry | Free Email Marketing Tools
                </h1>
                <p className="py-2 text-sm  text-blue-700">
                  <a href="#">Learn more {">"}</a>
                </p>
              </div>
            </div>
          </Carousel>
            </div></div>

    </>
  );
};

export default Fees;
