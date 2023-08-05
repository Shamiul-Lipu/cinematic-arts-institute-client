// import { useEffect, useState } from "react";
// import axios from "axios";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/Titles/SectionTitle";
import PopularCard from "../../components/PopularCard/PopularCard";
import Loader from "../../components/Loader/Loader";
import useFetchClasses from "../../hooks/useFetchClasses";
import useTitle from "../../hooks/useTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Instructors = () => {
  useTitle("Instructors");
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

  return (
    <section className="py-5 relative overflow-hidden">
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
      <Container>
        <SectionTitle
          title={"Our Instructors"}
          titleShort={
            "Master Your Craft with the Unparalleled Expertise of a Renowned Filmmaking Mentor"
          }
        ></SectionTitle>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1"
        >
          {classes &&
            classes.map((instructor, i) => (
              <PopularCard
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
                key={i}
              ></PopularCard>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Instructors;
