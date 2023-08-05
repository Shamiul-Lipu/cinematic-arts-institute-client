import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const plans = [
    {
      name: "Cinematic Virtuoso Guild",
      desc: "The Advanced Package is for those who are serious about elevating their cinematic skills to a professional level. It offers in-depth training, personalized feedback, and networking opportunities.",

      price: 32,
      isMostPop: true,
      features: [
        "Course Bundle",
        "One-on-One Mentorship",
        "Exclusive Workshops",
        "Project Reviews",
        "Networking Events",
        "Access to Equipment",
      ],
    },
    {
      name: "Cinematic Foundations Explorer",
      desc: "The Package is designed for aspiring filmmakers who want to learn the fundamentals of cinematic arts. It provides essential training and resources to help you get started on your cinematic journey..",
      price: 12,
      isMostPop: false,
      features: [
        "Course Access",
        "Enlightening Soirees",
        "Tome of Illumination",
        "Workshops",
        "Resource Library",
        "Community Forum",
      ],
    },
  ];
  return (
    <section className="relative py-14 bg-gray-700 overflow-hidden">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8">
        <div className="max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
          <h3 className="text-indigo-400 font-semibold">Pricing</h3>
          <p className="text-cyan-300 text-3xl font-semibold sm:text-4xl">
            Pay as you grow
          </p>
          <div className="max-w-xl">
            <p>
              Cinematic Foundations Explorer package is tailored for visionary
              creators who are embarking on their cinematic odyssey. It{"'"}s a
              gateway to the art of filmmaking, designed to nurture your
              creative essence and ignite your storytelling prowess.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="mt-16 justify-center sm:flex">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${
                item.isMostPop
                  ? "bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2"
                  : "border-transparent"
              }`}
            >
              <div className="p-4 py-8 space-y-4 border-b border-gray-700 md:p-8">
                <span className="text-gray-200 font-medium">{item.name}</span>
                <div className="text-cyan-400 text-3xl font-semibold">
                  ${item.price} <span className="text-xl font-normal">/mo</span>
                </div>
                <p className="text-gray-400">{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700">
                  Get Started
                </button>
              </div>
              <ul className="p-4 py-8 space-y-3 md:p-8">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        item.isMostPop ? "text-cyan-600" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
