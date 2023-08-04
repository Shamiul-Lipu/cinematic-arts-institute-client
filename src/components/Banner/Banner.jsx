import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Container from "../Container/Container";
import BtnJoin from "../Buttons/BtnJoin";
import imgOne from "../../assets/banner/bg23.jpg";
import imgTwo from "../../assets/banner/bg3.jpg";
import imgThree from "../../assets/banner/bg5.png";
import imgFour from "../../assets/banner/bg34.jpg";
const Banner = () => {
  return (
    <Container>
      {/*autoPlay={true} infiniteLoop={true} */}
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
        className="text-center"
      >
        {/* image one */}
        <div className="flex justify-evenly items-center bg-[#53bea2] w-full h-[450px]">
          <div className="flex justify-center items-center w-96 h-96">
            <img src={imgTwo} />
          </div>
          <div className="text-center px-2">
            <h2 className="font-extrabold text-3xl">
              Unleash Your Creative Vision
            </h2>
            <p className="font-bold text-xl text-[#a04c2f]">
              {" "}
              Discover the Art of Filmmaking
            </p>
            <BtnJoin
              label={"Join Now"}
              color={"bg-[#a04c2f]"}
              textColor={"text-white"}
              animateBounce={true}
            ></BtnJoin>
          </div>
        </div>
        {/* image two */}
        <div className="flex justify-evenly items-center bg-[#fa3d2a] w-full h-[450px]">
          <div className="text-center px-2">
            <h2 className="font-extrabold text-3xl">
              Uncover the Magic of Storytelling
            </h2>
            <p className="font-bold text-xl text-[#fbebc7]">
              {" "}
              Enroll in Our Film School Today
            </p>
            <BtnJoin
              label={"Join Now"}
              color={"bg-[#4c5765]"}
              textColor={"text-white"}
              animateBounce={true}
            ></BtnJoin>
          </div>
          <div className="flex justify-center items-center w-96 h-96">
            <img src={imgFour} />
          </div>
        </div>
        {/* image three */}
        <div className="flex justify-evenly items-center bg-[#46c6f3] w-full h-[450px]">
          <div className="flex justify-center items-center w-96 h-96">
            <img src={imgThree} />
          </div>
          <div className="text-center px-2">
            <h2 className="font-extrabold text-3xl">Step Into the Spotlight</h2>
            <p className="font-bold text-xl text-[#4c5765]">
              Launch Your Filmmaking Career With Us
            </p>
            <BtnJoin
              label={"Join Now"}
              color={"bg-[#4c5765]"}
              textColor={"text-white"}
              animateBounce={true}
            ></BtnJoin>
          </div>
        </div>
        {/* image four */}

        <div className="flex justify-evenly items-center bg-[#ffc300] w-full h-[450px]">
          <div className="text-center px-2">
            <h2 className="font-extrabold text-3xl">
              Craft Your Cinematic Masterpiece
            </h2>
            <p className="font-bold text-xl text-[#056e59e5]">
              {" "}
              Join the Film School of Choice
            </p>
            <BtnJoin
              label={"Join Now"}
              color={"bg-[#056e59e5]"}
              textColor={"text-white"}
              animateBounce={true}
            ></BtnJoin>
          </div>
          <div className="flex justify-center items-center w-96 h-96">
            <img src={imgOne} />
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default Banner;
