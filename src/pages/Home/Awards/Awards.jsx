import Container from "../../../components/Container/Container";
import bigAwardImgOne from "../../../assets/awards/awards1.png";
import bigAwardImgTow from "../../../assets/awards/awards2.png";
import awardOne from "../../../assets/awards/awards.png";
import awardTwo from "../../../assets/awards/award5.png";
import awardThree from "../../../assets/awards/award3.png";
import awardFour from "../../../assets/awards/award4.png";

const Awards = () => {
  return (
    <Container>
      <section className="text-white bg-[#111827] body-font relative">
        <div
          className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font  mb-4">
              Award-Winning Achievements
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-gray-300 ">
              Showcasing Awards and Achievements of the Cinematic Arts
              Institute. These awards affirm our commitment to excellence in
              cinematic arts, a testament to the fusion of creativity and
              technology.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={awardFour}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={awardTwo}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={bigAwardImgOne}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={bigAwardImgTow}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={awardThree}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={awardOne}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Awards;
