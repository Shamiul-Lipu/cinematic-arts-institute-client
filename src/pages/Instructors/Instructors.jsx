import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import axios from "axios";
import SectionTitle from "../../components/Titles/SectionTitle";
import PopularCard from "../../components/PopularCard/PopularCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        axios.get('classList.json')
            .then(res => {
                setInstructors(res.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [])
    console.log(instructors);
    return (
        <section className="py-5">
            <Container>
                <SectionTitle title={'Our Instructors'} titleShort={'Cinematic Masterpiece'}></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                    {
                        instructors && instructors.map(instructor => <PopularCard
                            instructor={instructor}
                            title={instructor.instructor}
                            image={instructor.instructorImg}
                            course={instructor.class}
                            instructorDetails={true}
                            email={instructor.email}
                            classesTaken={instructor.classesTaken}
                            rating={instructor.instructorRating}
                            classes={instructor.classes}
                            key={instructor.instructor}></PopularCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Instructors;