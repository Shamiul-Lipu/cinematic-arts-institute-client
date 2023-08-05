// import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/Titles/SectionTitle";
import ClassCard from "./ClassCard";
import useFetchClasses from "../../hooks/useFetchClasses";
import Loader from "../../components/Loader/Loader";
import useTitle from "../../hooks/useTitle";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Classes = () => {
  useTitle("Classes");
  useEffect(() => {
    AOS.init();
  }, []);
  // using useFetchClasses hook for fetching
  const { classes, isLoading, error } = useFetchClasses();
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  // const [classes, setClasses] = useState([]);
  // const { data: classes = [], refetch } = useQuery({
  //     queryKey: ['classes'],
  //     queryFn: async () => {
  //         const data = await axios(`http://localhost:5000/all-classes`)
  //         console.log(data);
  //         return data?.data
  //     }
  // })

  // useEffect(() => {
  //     // axios.get('http://localhost:5000/all-classes')
  //     //     .then(res => {
  //     //         setClasses(res.data);
  //     //     })
  //     //     .catch(error => {
  //     //         console.log('Error fetching data:', error);
  //     //     });
  //     // fetch('http://localhost:5000/all-classes')
  //     //     .then(res => res.json())
  //     //     .then(data => console.log(data))
  // }, [])
  // console.log(classes)
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
          title={"Our Classes"}
          titleShort={
            "Elevate Your Filmmaking Skills and Dive Into the Art of Visual Storytelling with our Comprehensive Training Programse"
          }
        ></SectionTitle>
        {/*  */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1"
        >
          {classes &&
            classes.map((classData, i) => (
              <ClassCard classData={classData} key={i}></ClassCard>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Classes;
