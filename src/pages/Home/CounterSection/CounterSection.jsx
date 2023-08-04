import Container from "../../../components/Container/Container";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

const CounterSection = () => {
  const stats = [
    {
      data: 35,
      str: "k",
      title: "Students",
    },
    {
      data: 40,
      str: "+",
      title: "Countries",
    },
    {
      data: 50,
      str: "k+",
      title: "Movie produced",
    },
  ];
  //   console.log(stats);

  return (
    <Container>
      <section className="py-10 bg-gray-900 rounded-b-xl">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Start learning with <br /> <span>Cinematic Arts Institute</span>
            </h3>
            <p className="mt-3 text-gray-300">
              Unlock Boundless Learning through Well-Structured Courses &
              Unleash Your Creative Potential.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center pt-10 text-center">
            <Fade cascade>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <Fade cascade>
                  <img
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </Fade>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                Join 35k+ users community
              </p>
            </Fade>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto"
                >
                  <h4 className="text-4xl text-white font-semibold">
                    {/* {item.data} */}
                    <CountUp
                      end={item.data}
                      enableScrollSpy={true}
                      duration={5}
                    />
                    {item.str}
                  </h4>
                  <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CounterSection;
