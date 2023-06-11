import Banner from "../../components/Banner/Banner";
import useTitle from "../../hooks/useTitle";
import Features from "./ExtraSection/Features/Features";
import Speciality from "./ExtraSection/Speciality/Speciality";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
    useTitle('Home');
    return (
        <>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Speciality></Speciality>
            <Features></Features>
        </>
    );
};

export default Home;

// TODO: resize the images to same and change banner
// add more features