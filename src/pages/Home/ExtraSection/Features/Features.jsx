import { Parallax } from "react-parallax";
import Container from "../../../../components/Container/Container";
import SectionTitle from "../../../../components/Titles/SectionTitle";
import SubSectionTitle from "../../../../components/Titles/SubSectionTitle";
import { FaFilm, FaCameraRetro, FaChalkboardTeacher, FaMedal } from "react-icons/fa";
import { FcCamcorderPro, FcClapperboard, FcPhotoReel, FcPicture } from "react-icons/fc";

const Features = () => {
    return (
        <div>
            <Container>
                <div className="pb-10 max-w-7xl mx-auto">
                    <SectionTitle title={'FILM SCHOOL FACILITIES'}></SectionTitle>
                    <div className="grid md:grid-cols-2 ">
                        <div className="grid grid-cols-2 mx-auto pb-5">
                            <FcCamcorderPro className="w-20 h-20" />
                            <FcClapperboard className="w-20 h-20" />
                            <FcPhotoReel className="w-20 h-20" />
                            <FcPicture className="w-20 h-20" />
                        </div>
                        <p>During the study at our film school, you will have access to high-end filmmaking equipment and a <span className="text-black font-bold cardStyle">green screen studio</span> located on our campus. Our equipment is available for you to use free of charge both during the classes and on your own final film projects and includes the most popular cinema cameras <span className="text-black font-bold cardStyle">RED Gemini and RED Dragon, various camera accessories, lenses, lights, sound equipment, grip, production and mobile facilities (car Hyundai H1).</span> </p>

                    </div>
                </div>
            </Container>
            <div className="">
                <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage='https://i.ibb.co/hYX94j6/3.jpg'
                    bgImageAlt=""
                    strength={-200}
                >
                    <div className="bg-gray-700 opacity-90">
                        <Container>
                            <SectionTitle textWhite={true} title={'WHAT ELSE WE OFFER?'}></SectionTitle>
                            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-1 text-white text-center">
                                <div className="">
                                    <FaFilm className="mx-auto w-10 h-10" />
                                    <SubSectionTitle titleShort={'Practical Approach to Learning'}></SubSectionTitle>
                                    <p className="text-sm py-3">During study you will turn all knowledge acquired in the classroom into practice. During each academic year you will shoot up to 20 short films and scenes of different styles which you can be used for a high-quality showreel.</p>
                                </div>
                                <div>
                                    <FaCameraRetro className="mx-auto w-10 h-10" />
                                    <SubSectionTitle titleShort={'Be Mentored by Film Practicioners'}></SubSectionTitle>
                                    <p className="text-sm py-3">Small class sizes means more time with tutors and individual guidance on your projects. Our teachers are actively involved in the film industry and can offer tips on the latest trends in filmmaking. </p>
                                </div>
                                <div>
                                    <FaChalkboardTeacher className="mx-auto w-10 h-10" />
                                    <SubSectionTitle titleShort={'Internship on a Film Set'}></SubSectionTitle>
                                    <p className="text-sm py-3">Our best students will get a chance to have a filmmaking internship on a professional film set. The internship will grow your network of all-important contacts and set yourself apart in this very competitive career field.  </p>
                                </div>
                                <div>
                                    <FaMedal className="mx-auto w-10 h-10" />
                                    <SubSectionTitle titleShort={'Festival-worthy Films'}></SubSectionTitle>
                                    <p className="text-sm py-3">Every year of study you will shoot 2 festival-worthy films for which you will have access to locations on our premises including a green screen and light studio and professional equipment, including RED cameras. </p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Parallax>
            </div>
        </div>
    );
};

export default Features;


