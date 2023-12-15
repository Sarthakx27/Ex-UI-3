import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Curriculum = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="w-full font-display py-3">
        <div className="w-9/12 px-20 mx-auto">
          <h1 className=" text-3xl font-bold text-start ">Curriculum</h1>
          <div className=" py-5 flex gap-4">
            <p className=" w-[80%] text-sm tracking-wide text-gray-800">
              Pursue a MS in Business Analytics in the USA without a GRE or GMAT
              from Eller School at University of Arizona. This Masters in BA
              program lets you save 55+ Lakhs INR, get a 3-year STEM OPT visa,
              making it an ideal study abroad program.
            </p>
            <button
              className=" flex items-center text-center justify-center gap-2 rounded-lg border-2 border-transparent text-white hover:border-blue-700 
           w-[15rem] py-3 text-sm mx-auto tracking-wider hover:bg-transparent bg-blue-700 hover:text-blue-700 transition duration-500   "
            >
              Download Brochure
            </button>
          </div>
        </div>
        <div className="w-8/12 pt-5 px-20 mx-auto">
          <h1 className="font-semibold text-xl mt-5 mb-4">
            Required Foundational Courses (12 units)
          </h1>
          <Accordion
            className=" bg-gray-200 px-7 py-3 rounded-lg"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(1)}>
              <h1 className="text-base font-semibold text-gray-800">
                Business Foundation (6 units)
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-800 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">
                  Introduction to Financial and Managerial Accounting (2)
                </li>
                <li className="py-2 tracking-wide">
                  Market-Based Management (2)
                </li>
                <li className="py-2 tracking-wide">Financial Management (2)</li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion
            className=" bg-gray-200 px-7 py-3 rounded-lg mt-5"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(2)}>
              <h1 className="text-base font-semibold text-gray-800">
                Data and Analytics Foundation (6 units)
              </h1>
            </AccordionHeader>
            <AccordionBody>
              <ul className="border-t border-gray-800 pt-3 text-sm text-start leading-6 list-disc pl-3 text-gray-800">
                <li className="py-2 tracking-wide">
                  Statistical Foundations of Business Analytics (2)
                </li>
                <li className="py-2 tracking-wide">
                  Foundations of Python for Analytics (2)
                </li>
                <li className="py-2 tracking-wide">Database Foundations (2)</li>
              </ul>
            </AccordionBody>
          </Accordion>

          <h1 className="font-semibold text-xl mt-12 mb-4">
            Core and Elective Courses (21 units)
          </h1>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Big Data Technologies (3)
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base text-gray-800">
            Data Mining for Business Intelligence (3)
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Econometrics (3)
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Data Visualization (3)
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Business Consulting (3)
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            MSBA Elective Course 1* (3)
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            MSBA Elective Course 2* (3)
            </h1>
          </div>


          <h1 className="font-semibold text-xl mt-12 mb-4">
            *MSBA Elective Courses Include (Each class is 3 units)
          </h1>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Optimization for Business
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base text-gray-800">
            Econometrics and Machine Learning
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Business Function Electives in Accounting, Marketing, or Financial Analytics
            </h1>
          </div>
          <div className=" bg-gray-200 px-7 py-6 my-3 rounded-lg">
            <h1 className="text-base  text-gray-800">
            Additional Electives Available
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
