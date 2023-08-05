import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Titles/SectionTitle";
import PopularCard from "../../../components/PopularCard/PopularCard";
import useFetchClasses from "../../../hooks/useFetchClasses";
import Loader from "../../../components/Loader/Loader";

const PopularClasses = () => {
  // using useFetchClasses hook to fetch data
  const { classes, isLoading, error } = useFetchClasses();
  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const [classes, setClasses] = useState([]);

  // useEffect(() => {
  //     axios.get('classList.json')
  //         .then(res => {
  //             setClasses(res.data);
  //         })
  //         .catch(error => {
  //             console.log('Error fetching data:', error);
  //         });
  // }, [])
  // console.log(classes);
  return (
    <section className="py-5">
      <Container>
        <SectionTitle
          title={"Prime Courses"}
          titleShort={
            "Elevate Your Filmmaking Skills and Dive Into the Art of Visual Storytelling with our Comprehensive Training Programs"
          }
        ></SectionTitle>
        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1 relative ">
          <div
            className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
            style={{
              background:
                "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
            }}
          ></div>
          {classes &&
            classes
              .slice(0, 6)
              .map((classData, i) => (
                <PopularCard
                  image={classData?.imgUrl}
                  title={classData?.class}
                  rating={classData?.classRating}
                  numOfStudent={classData?.numOfStudent}
                  classData={classData}
                  bgNew={true}
                  key={i}
                ></PopularCard>
              ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularClasses;
