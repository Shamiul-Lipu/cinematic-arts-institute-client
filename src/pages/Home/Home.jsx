import Banner from "../../components/Banner/Banner";
import Features from "./ExtraSection/Features/Features";
import Speciality from "./ExtraSection/Speciality/Speciality";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
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