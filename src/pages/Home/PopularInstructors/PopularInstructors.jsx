// import { useEffect, useState } from "react";
// import axios from 'axios';
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Titles/SectionTitle";
import PopularCard from "../../../components/PopularCard/PopularCard";
import useFetchClasses from "../../../hooks/useFetchClasses";
import Loader from '../../../components/Loader/Loader'

const PopularInstructors = () => {
    // using useFetchClasses hook to fetch data
    const { classes, isLoading, error } = useFetchClasses();
    if (isLoading) {
        return <Loader></Loader>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    // const [instructors, setInstructors] = useState([]);

    // useEffect(() => {
    //     axios.get('classList.json')
    //         .then(res => {
    //             setInstructors(res.data);
    //         })
    //         .catch(error => {
    //             console.log('Error fetching data:', error);
    //         });
    // }, [])

    // console.log(instructors);
    return (
        <section className="py-5">
            <Container>
                <SectionTitle title={'Popular Instructor'} titleShort={'Cinematic Masterpiece'}></SectionTitle>
                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                    {/* {
                        instructors && instructors.map(instructor => <InstructorCard instructor={instructor} key={instructor.instructor}></InstructorCard>)
                    } */}
                    {
                        classes && classes.map(instructor => <PopularCard
                            instructor={instructor}
                            title={instructor.instructor}
                            image={instructor.instructorImg}
                            course={instructor.class}

                            key={instructor.instructor}></PopularCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default PopularInstructors;