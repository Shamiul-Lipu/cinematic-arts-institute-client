import { useEffect, useState } from "react";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/Titles/SectionTitle";
import axios from 'axios';
import PopularCard from "../../../components/PopularCard/PopularCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get('classList.json')
            .then(res => {
                setClasses(res.data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [])

    // console.log(classes);
    return (
        <section className="py-5">
            <Container>
                <SectionTitle title={'Popular Classes'} titleShort={'Craft Your Cinematic Masterpiece'}></SectionTitle>
                {/*  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                    {/* {
                        classes && classes.map(classData => <ClassCard classData={classData} key={classData.instructor}></ClassCard>)
                    } */}
                    {
                        classes && classes.map(classData => <PopularCard
                            image={classData.imgUrl}
                            title={classData.class}
                            rating={classData.classRating}
                            classData={classData}
                            key={classData.instructor}></PopularCard>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default PopularClasses;