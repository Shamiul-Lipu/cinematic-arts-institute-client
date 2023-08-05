import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Titles/SectionTitle";
import { Fade } from "react-awesome-reveal";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emily S",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      qutoe:
        "I've attended many learning platforms, but the Cinematic Arts Institute stands out. The courses are engaging, the community is supportive, and the skills I've gained here have opened doors to exciting opportunities.",
    },
    {
      name: "Alex R",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
      qutoe:
        "From screenwriting to post-production, the Cinematic Arts Institute covers it all. The comprehensive courses and industry-relevant projects have given me the skills and portfolio to make my mark in the competitive world of film.",
    },
    {
      name: "Maya D",
      image:
        "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
      qutoe:
        "The Cinematic Arts Institute isn't just an educational platform; it's a creative haven. The courses are a perfect blend of theory and practice, and the mentors' dedication to students' growth is truly inspiring.",
    },
  ];
  //   console.log(testimonials);
  return (
    <section className="relative">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <Container>
        <SectionTitle
          title={"Words of Praise from Our Students"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
          <Fade cascade>
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="cardStyle max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
              >
                <Fade cascade>
                  <div className="flex justify-center md:justify-end -mt-16">
                    <img
                      className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                      src={testimonial.image}
                    />
                  </div>
                  <div>
                    <p className="textWhite mt-2 text-gray-600">
                      {testimonial.qutoe}
                    </p>
                  </div>
                  <div className="flex justify-end mt-4">
                    <a href="#" className="text-xl font-medium text-indigo-500">
                      {testimonial.name}
                    </a>
                  </div>
                </Fade>
              </div>
            ))}
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
