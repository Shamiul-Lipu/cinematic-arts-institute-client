import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-28 relative">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <div className="relative max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
        <div className="flex-1 max-w-lg">
          <h3 className="text-3xl font-bold">
            Get our beautiful newsletter straight to your inbox.
          </h3>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-x-3 md:justify-end"
          >
            <div className="relative">
              <FaEnvelope className="w-6 h-6 text-gray-300 absolute left-3 inset-y-0 my-auto" />
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-white bg-gray-500 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
