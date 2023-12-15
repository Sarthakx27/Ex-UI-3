import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Faculty = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <div className="w-full font-display py-16">
        <div className="w-9/12 px-20 mx-auto">
          <h1 className=" text-3xl font-bold text-start ">Meet the Faculty</h1>
          <p className=" py-5 text-sm tracking-wide text-gray-800">
            Learn from the esteemed faculty at University of Arizona and
            practicing Industry Professionals with immense experience in the
            field of Business Analytics.
          </p>
          <div className="grid grid-cols-3 gap-5 place-items-center mt-3 mb-28">
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-3551559338-BGhosh.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Bikram Ghosh
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Associate Professor of Marketing, Eller Fellow
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="	https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-274-JNielsen.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Jesper Nielsen
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Associate Professor of Marketing
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-275-EGisches.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Eyran Gisches
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Senior Lecturer in Management Information Systems Manager,
                  Organizational Behavior Laboratory
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-276-SSunder.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Shyam Sunder
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Director, Dhaliwal-Reidy School of Accountancy. Lou Myers
                  Professor of Accounting
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-277-MGHunter.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  M. Grey Hunter
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Senior Lecturer of Economics. Academic Director, MS Business
                  Analytics Program. Pre-Business Statistics Coordinator
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-278-TWoutersen.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Tiemen Woutersen
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Professor of Economics, Eller Fellow
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-279-CLamoureux.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Christopher Lamoureux
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Diamond Professor of Finance
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 shadow-md place-items-start h-[9rem] px-4 py-4 rounded-lg">
              <img
                className=" w-9/12 rounded-full row-span-2"
                src="https://dtmvamahs40ux.cloudfront.net/public/faculties/faculties-280-SYoun.jpg"
                alt=""
              />
              <div className=" col-span-2">
                <h1 className=" text-lg font-semibold text-gray-700 tracking-wide w-full">
                  Seokjun Youn
                </h1>
                <p className="py-2 text-sm  text-gray-700">
                  Assistant Professor of Management Information Systems
                </p>
              </div>
            </div>
          </div>
          {/* Carosoul */}

          <h1 className="w-9/12 text-3xl font-bold text-start mb-16">
            Get The University of Arizona Advantage
          </h1>

          <Carousel responsive={responsive} arrows infinite autoPlay pauseOnHover autoPlaySpeed={3000} >
            <div className="mx-5 bg-purple-100 rounded-lg h-[28rem] pb-12">
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/on-campus.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                On-Campus Experience
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                Interact with outstanding faculty and global peers at the
                University of Arizona campus in Chandler, Arizona.
              </p>
            </div>
            <div className="mx-5 bg-purple-100 rounded-lg h-[28rem] pb-12">
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/network.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Bear Down Network
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                Get access to the online directory of The University of Arizona
                alumni with features like job board, mentorship opportunities,
                and much more.
              </p>
            </div>
            <div className="mx-5 bg-purple-100 rounded-lg h-[28rem] pb-12">
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/mentor.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Wildcat Mentor Society
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                Join transformative program to build strong professional network
                and get guidance from mentors.
              </p>
            </div>
            <div className="mx-5 bg-purple-100 rounded-lg h-[28rem] pb-12">
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/graduate.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Graduate Center
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                A reliable resource for graduate and postdoctoral learners to
                enhance their academic and professional success.
              </p>
            </div>
            <div className="mx-5 bg-purple-100 rounded-lg h-[28rem] pb-12">
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/lifelab.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Lifelab
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                Personalized career guidance platform to help learners with
                resume-building, cover letters, LinkedIn profiles, and more.
              </p>
            </div>
            <div className="mx-5 bg-purple-100 rounded-lg h-[28rem] pb-12">
              <img
                className=" w-full mx-auto rounded-xl"
                src="https://d1vwxdpzbgdqj.cloudfront.net/arizona-ms/handshake.jpg"
                alt="..."
              />
              <h1 className=" text-xl text-gray-700 font-semibold text-start p-5">
                Handshake
              </h1>
              <p className=" text-sm text-gray-800 text-start pl-5 leading-6 tracking-wide">
                Official job board and campus interviewing system for learners
                to access hiring opportunities, career prep resources, and
                communities.
              </p>
            </div>
          </Carousel>
        </div>
        
      </div>
    </div>
  );
};

export default Faculty;
