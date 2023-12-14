import React from "react";
import { Carousel } from "flowbite-react";

const About = () => {
  return (
<>
    <div className="w-full font-display py-10">
      <div className=" w-1/2 mx-auto flex flex-row justify-between px-28">
        <div className="grid grid-row-2 place-items-center gap-5">
          <h1 className="text-xl">Program Delivered by:</h1>
          <img
            className="w-2/3"
            src="	https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/eller_collage_logo.png"
            alt=""
          />
        </div>
        <div className="grid grid-row-2 place-items-center gap-5">
          <h1 className=" text-xl">In Collaboration with:</h1>
          <img
            className="w-2/3"
            src="https://d1vwxdpzbgdqj.cloudfront.net/s3-public-images/learning-partners/greatlearning-brand.svg"
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-16 grid grid-cols-4 place-items-center gap-3">
        <div className="grid h-56 gap-4 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-5 py-4">
          <img
            className="w-1/3"
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/news-us.jpg"
            alt=""
          />
          <h1 className=" font-semibold text-gray-800 text-sm">
            Top 10 Public Graduate Business Analytics Program
          </h1>
          <p className=" text-xs">U.S. News & World Report</p>
          <p className=" text-xs">2023</p>
        </div>
        <div className="grid h-56 gap-4 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-5 py-4">
          <img
            className="w-1/3"
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/news-us.jpg"
            alt=""
          />
          <h1 className=" font-semibold text-gray-800 text-sm">
            #53 in Best Business Schools
          </h1>
          <p className=" text-xs">U.S. News & World Report</p>
          <p className=" text-xs">2023</p>
        </div>
        <div className="grid h-56 gap-4 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-5 py-4">
          <img
            className="w-1/3"
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/us-news.jpg"
            alt=""
          />
          <h1 className=" font-semibold text-gray-800 text-sm">
            Top 100 Global University
          </h1>
          <p className=" text-xs">U.S. News & World Report</p>
          <p className=" text-xs">2021</p>
        </div>
        <div className="grid h-56 gap-4 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-5 py-4">
          <img
            className="w-1/2"
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/cwur.jpg"
            alt=""
          />
          <h1 className=" font-semibold text-gray-800 text-sm">
            Top 0.47% Worldwide University
          </h1>
          <p className=" text-xs">Center for World University Rankings</p>
          <p className=" text-xs">2022</p>
        </div>
      </div>

      {/* WHY CHOOSE US? */}

      <div className=" w-1/2 mx-auto flex flex-col justify-center text-center mt-24">
        <h1 className="text-3xl font-semibold">
          Why Choose this Master of Science in Business Analytics?
        </h1>
        <div className="grid grid-flow-col gap-3 mt-16">
          <div className="grid h-96 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-8 py-4 bg-blue-100">
            <h1 className=" text-xl font-semibold text-gray-800 pb-5">
              Hybrid Format
            </h1>
            <ul className=" text-sm text-start leading-6 list-disc pl-3 text-gray-800">
              <li className="py-2">
                Hybrid mode of learning with first 6 months online and next 12
                months on-campus in US.
              </li>
              <li className="py-2">
                Save INR 55+ Lakhs as compared to full-time masters in USA.
              </li>
              <li className="py-2">
                Eligible for up to 3 years STEM OPT Visa in the US.
              </li>
            </ul>
          </div>
          <div className="grid h-96 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-8 py-4 bg-indigo-200">
            <h1 className=" text-xl font-semibold text-gray-800 pb-5">
              Learn from World-Class Faculty
            </h1>
            <ul className=" text-sm text-start leading-6 list-disc pl-3 text-gray-800">
              <li className="py-2">
                Learn from the Eller College of Management faculty over live
                online classes and in-person classes.
              </li>
              <li className="py-2">
                Curriculum designed by leading experts to cover data science and
                business analytics skills from fundamentals to complex, hands-on
                applications.
              </li>
            </ul>
          </div>
          <div className="grid h-96 border-2 rounded-lg shadow-lg hover:translate-y-2 duration-500 place-items-center text-center px-8 py-4 bg-violet-200">
            <h1 className=" text-xl font-semibold text-gray-800 pb-5">
              Practical, Hands-on Learning
            </h1>
            <ul className=" text-sm text-start leading-6 list-disc pl-3 text-gray-800">
              <li className="py-2">
                Get the best practical learning experience with the faculty of
                The University of Arizona, a world leader in research and
                innovation.
              </li>
              <li className="py-2">
                Business Consulting Class and Experience equips learners to
                solve real-world business problems.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl w-1/2 mx-auto bg-[url('https://d1vwxdpzbgdqj.cloudfront.net/lc-download-brochure-banner.jpg')]">
        <div className="rounded-xl flex flex-col justify-center text-center mt-24 gap-5 text-white   px-1 py-7 bg-blue-700 bg-opacity-80">
          <h1 className=" w-5/6 mx-auto text-2xl font-semibold">
            Earn Master’s degree from One of the Top 100 Global Universities in
            the World, University of Arizona.
          </h1>
          <p>Online + On-Campus in USA • 18 Months</p>
          <button
            className=" flex items-center text-center justify-center gap-2 rounded-lg border-2 border-transparent text-black hover:border-white 
          font-semibold w-60 mx-auto tracking-wider py-3 hover:bg-transparent bg-white hover:text-white transition duration-500   "
          >
            Download Brochure
            <img
              src="https://d1vwxdpzbgdqj.cloudfront.net/download-black.svg"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* TOP RECRUTIERS */}

      <div className=" w-1/2 mx-auto rounded-xl flex flex-col justify-center text-center mt-24 gap-5 py-7">
        <h1 className="text-3xl font-bold">
          Top Recruiters that hire from University of Arizona
        </h1>
        <div className="grid grid-cols-6  gap-4 mt-16 place-items-center">
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/dms/google.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/microsoft.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/tesla.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/goldmanSachs.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/honeywell.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/boeing.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/americanExpress.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/dms/apple.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/nasa.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/walmart.png"
            alt=""
          />
          <img
            src="	https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/amazon.png"
            alt=""
          />
          <img
            src="https://d1vwxdpzbgdqj.cloudfront.net/images/arizona_page/deloitte.png"
            alt=""
          />
        </div>
      </div>

      {/* @WORLD CLAS CAMPUS */}

      <div className=" w-full mx-auto rounded-xl flex flex-col justify-center text-center mt-24 gap-5 py-7">
        <h1 className="text-3xl font-bold">
          Experience learning at a world-class campus
        </h1>
        <div className="w-1/2 mx-auto px-36 h-[40rem] rounded-xl">
          <Carousel pauseOnHover>
            <div>
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/campus-img/uoa-campus-1.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Living on-campus at Chandler, Arizona
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                Chandler is a part of metro Phoenix, which is one of the fastest
                growing metro areas in the US with leading companies in
                financial services, semi-conductor, medical device and services,
                aerospace, biotech etc. Phoenix is now the 5th largest city in
                the US.
              </p>
            </div>
            <div>
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/campus-img/uoa-campus-2.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                {" "}
                International Student Services
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                The International Student Services office strives to support all
                international students through graduation. You will find
                immigration guidance, academic resources, cultural connections,
                and social events through the International Student Services
                office.
              </p>
            </div>
            <div>
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/campus-img/uoa-campus-4.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Complete Access to the UArizona Libraries
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                A dozen state-of-the-art facilities are at your disposal. Hubs
                of technology, arts, sciences, and more make it easy to dive
                deep into knowledge.
              </p>
            </div>
            <div>
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/campus-img/uoa-campus-5.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Top 10 Recreation Centers - Best Value Schools, 2021
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                University of Arizona’s Campus Recreation (Campus REC) is the
                health and well-being place to be. From individual and group
                fitness classes to outdoor adventures and aquatics, there is
                something for you no matter your level of ability or expertise.
              </p>
            </div>
            <div>
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/campus-img/uoa-campus-6.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
              24X7 Technical Support
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
              Access to technical support 24 hours a day, 7 days a week, will make you campus life easy. 
              </p>
            </div>
          </Carousel>
        </div>
      </div>

    </div>
    </>
  );
};

export default About;
