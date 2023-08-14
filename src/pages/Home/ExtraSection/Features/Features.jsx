import { Parallax } from "react-parallax";
import Container from "../../../../components/Container/Container";
import SectionTitle from "../../../../components/Titles/SectionTitle";
import SubSectionTitle from "../../../../components/Titles/SubSectionTitle";
import {
  FaFilm,
  FaCameraRetro,
  FaChalkboardTeacher,
  FaMedal,
} from "react-icons/fa";
import {
  FcCamcorderPro,
  FcClapperboard,
  FcPhotoReel,
  FcPicture,
} from "react-icons/fc";
import { Fade } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <Container>
        <div className="pb-10 max-w-7xl mx-auto">
          <SectionTitle title={"FILM SCHOOL FACILITIES"}></SectionTitle>
          <div className="grid md:grid-cols-2 overflow-hidden">
            <div
              data-aos="fade-up-right"
              className="grid grid-cols-2 mx-auto pb-5"
            >
              <FcCamcorderPro className="w-20 h-20" />
              <FcClapperboard className="w-20 h-20" />
              <FcPhotoReel className="w-20 h-20" />
              <FcPicture className="w-20 h-20" />
            </div>

            <p data-aos="fade-up-left">
              During the study at our film school, you will have access to
              high-end filmmaking equipment and a{" "}
              <span className="text-black font-bold cardStyle">
                green screen studio
              </span>{" "}
              located on our campus. Our equipment is available for you to use
              free of charge both during the classes and on your own final film
              projects and includes the most popular cinema cameras{" "}
              <span className="text-black font-bold cardStyle">
                RED Gemini and RED Dragon, various camera accessories, lenses,
                lights, sound equipment, grip, production and mobile facilities
                (car Hyundai H1).
              </span>{" "}
            </p>
          </div>
        </div>
      </Container>
      <div className="">
        <div
          className="bg-fixed bg-no-repeat bg-center bg-image bg-opacity-100"
          style={{ backgroundImage: `url(https://i.ibb.co/hYX94j6/3.jpg)` }}
        >
          <div className="bg-gray-700 opacity-90 py-5">
            <Container>
              <SubSectionTitle
                textWhite={true}
                title={"WHAT ELSE WE OFFER?"}
              ></SubSectionTitle>

              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-1 text-white text-center">
                <Fade duration={700} cascade>
                  <div className="border-[1px] border-indigo-300 rounded-lg py-4 px-1 bg-slate-800">
                    <FaFilm className="mx-auto w-14 h-14 text-cyan-300 bg-slate-600 px-3 py-2 rounded-lg" />
                    <SubSectionTitle
                      titleShort={"Practical Approach to Learning"}
                    ></SubSectionTitle>
                    <p className="text-sm py-1">
                      During study you will turn all knowledge acquired in the
                      classroom into practice. During each academic year you
                      will shoot up to 20 short films and scenes of different
                      styles which you can be used for a high-quality showreel.
                    </p>
                  </div>
                  <div className="border-[1px] border-indigo-300 rounded-lg py-4 px-1 bg-slate-800">
                    <FaCameraRetro className="mx-auto w-14 h-14 text-cyan-300 bg-slate-600 px-3 py-2 rounded-lg" />
                    <SubSectionTitle
                      titleShort={"Be Mentored by Film Practicioners"}
                    ></SubSectionTitle>
                    <p className="text-sm py-3">
                      Small class sizes means more time with tutors and
                      individual guidance on your projects. Our teachers are
                      actively involved in the film industry and can offer tips
                      on the latest trends in filmmaking.{" "}
                    </p>
                  </div>
                  <div className="border-[1px] border-indigo-300 rounded-lg py-4 px-1 bg-slate-800">
                    <FaChalkboardTeacher className="mx-auto w-14 h-14 text-cyan-300 bg-slate-600 px-3 py-2 rounded-lg" />
                    <SubSectionTitle
                      titleShort={"Internship on a Film Set"}
                    ></SubSectionTitle>
                    <p className="text-sm py-3">
                      Our best students will get a chance to have a filmmaking
                      internship on a professional film set. The internship will
                      grow your network of all-important contacts and set
                      yourself apart in this very competitive career field.{" "}
                    </p>
                  </div>
                  <div className="border-[1px] border-indigo-300 rounded-lg py-4 px-1 bg-slate-800">
                    <FaMedal className="mx-auto w-14 h-14 text-cyan-300 bg-slate-600 px-3 py-2 rounded-lg" />
                    <SubSectionTitle
                      titleShort={"Festival-worthy Films"}
                    ></SubSectionTitle>
                    <p className="text-sm py-3">
                      Every year of study you will shoot 2 festival-worthy films
                      for which you will have access to locations on our
                      premises including a green screen and light studio and
                      professional equipment, including RED cameras.{" "}
                    </p>
                  </div>
                </Fade>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
