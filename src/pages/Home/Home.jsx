import Banner from "../../components/Banner/Banner";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
        </>
    );
};

export default Home;