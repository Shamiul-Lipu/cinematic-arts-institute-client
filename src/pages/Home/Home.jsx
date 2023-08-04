import Banner from "../../components/Banner/Banner";
import useTitle from "../../hooks/useTitle";
import CounterSection from "./CounterSection/CounterSection";
import Features from "./ExtraSection/Features/Features";
import Speciality from "./ExtraSection/Speciality/Speciality";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>
      <CounterSection></CounterSection>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Speciality></Speciality>
      <Features></Features>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;

// TODO: resize the images to same and change banner
// add more features
