// import { useEffect, useState } from "react";
// import axios from "axios";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/Titles/SectionTitle";
import PopularCard from "../../components/PopularCard/PopularCard";
import Loader from "../../components/Loader/Loader";
import useFetchClasses from "../../hooks/useFetchClasses";
import useTitle from "../../hooks/useTitle";

const Instructors = () => {
    useTitle('Instructors')
    // using useFetchClasses hook to fetch data
    const { classes, isLoading, error } = useFetchClasses();
    if (isLoading) {
        return <Loader></Loader>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="py-5">
            <Container>
                <SectionTitle title={'Our Instructors'} titleShort={'Master Your Craft with the Unparalleled Expertise of a Renowned Filmmaking Mentor'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                    {
                        classes && classes.map((instructor, i) => <PopularCard
                            instructor={instructor}
                            title={instructor?.instructor}
                            image={instructor?.instructorImg}
                            course={instructor?.class}
                            instructorDetails={true}
                            email={instructor?.email}
                            classesTaken={instructor?.classesTaken}
                            rating={instructor?.instructorRating}
                            classes={instructor?.classes}
                            status={instructor?.classStatus}
                            key={i}></PopularCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Instructors;