// import { useEffect, useState } from "react";
// import axios from 'axios';
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Titles/SectionTitle";
import PopularCard from "../../../components/PopularCard/PopularCard";
import useFetchClasses from "../../../hooks/useFetchClasses";
import Loader from "../../../components/Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularInstructors = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
    <section className="py-5 customDark bg-indigo-100 overflow-hidden">
      <Container>
        <SectionTitle
          title={"Leading Luminary"}
          titleShort={
            "Ignite Your Passion for Filmmaking and Embark on a Transformative Journey of Self-Expression with Our Expert-Led Classes and Workshops"
          }
        ></SectionTitle>
        {/*  */}
        <div
          data-aos="zoom-in-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1"
        >
          {/* {
                        instructors && instructors.map(instructor => <InstructorCard instructor={instructor} key={instructor.instructor}></InstructorCard>)
                    } */}
          {classes &&
            classes
              .slice(0, 6)
              .map((instructor, i) => (
                <PopularCard
                  instructor={instructor}
                  title={instructor?.instructor}
                  image={instructor?.instructorImg}
                  course={instructor?.class}
                  currentStudent={instructor?.numOfStudent}
                  bgTrue={true}
                  key={i}
                ></PopularCard>
              ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularInstructors;
