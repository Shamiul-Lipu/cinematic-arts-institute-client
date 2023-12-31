import Container from "../../../../components/Container/Container";
import BtnJoin from "../../../../components/Buttons/BtnJoin";
import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../../../components/Titles/SectionTitle";

const Speciality = () => {
  return (
    <section className="customDark bg-indigo-100 pt-10">
      <Container>
        <SectionTitle
          title={"WHAT SETS US APART?"}
          titleShort={
            "We are the only school that offers specialised modules that are in high demand and essential in current filmmaking industry. "
          }
        ></SectionTitle>
      </Container>
      <div className="pt-4">
        <div
          className="bg-fixed bg-center bg-image bg-opacity-100"
          style={{ backgroundImage: `url(https://i.ibb.co/fHQLM2z/bg2.jpg)` }}
        >
          <Container>
            <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-1">
              <Fade duration="800" cascade>
                <div className="card w-full shadow-xl bg-slate-300 cardStyle">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://i.ibb.co/n7dDb9r/Screenshot-2.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">DRONE CINEMATOGRAPHY</h2>
                    <p>
                      Drone operation lessons are included in our courses. Seize
                      the opportunity to learn drone cinematic techniques, get a
                      drone pilot licence and shoot breathtaking aerial footage
                      for your showreel.
                    </p>
                    <div className="card-actions">
                      <BtnJoin
                        label={"Join Now!"}
                        color={"bg-[#818cf8]"}
                        textColor={"text-white"}
                      ></BtnJoin>
                    </div>
                  </div>
                </div>
                <div className="card w-full  shadow-xl bg-slate-300 cardStyle">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://i.ibb.co/9tv5RQp/Screenshot-1.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">UNDERWATER CAMERA</h2>
                    <p>
                      We will introduce you to the captivating world of
                      professional underwater cinematography. You will earn an
                      OWD diving certificate, learn advanced underwater camera
                      techniques, and capture breathtaking footage.
                    </p>
                    <div className="card-actions">
                      <BtnJoin
                        color={"bg-[#818cf8]"}
                        textColor={"text-white"}
                        label={"Join Now"}
                      ></BtnJoin>
                    </div>
                  </div>
                </div>
                <div className="card w-full shadow-xl bg-slate-300 cardStyle">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://i.ibb.co/4mMQZkZ/Screenshot-16.png"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">ACTION SCENES SHOOTING</h2>
                    <p>
                      Learn from the best how to direct and shoot both action
                      and fighting scenes. Master efficient stuntmen
                      coordination. The teacher of this module is president of
                      Czech Stunt and Fighters Association.{" "}
                    </p>
                    <div className="card-actions">
                      <BtnJoin
                        color={"bg-[#818cf8]"}
                        textColor={"text-white"}
                        label={"Join Now"}
                      ></BtnJoin>
                    </div>
                  </div>
                </div>
                <div className="card w-full  shadow-xl bg-slate-300 cardStyle">
                  <figure className="px-10 pt-10">
                    <img
                      src="https://i.ibb.co/BfbpLj2/11.jpg"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Art of Film Making</h2>
                    <p>
                      Immerse Yourself in the World of Cinematography, Editing,
                      and Storytelling. Master the Technical Skills and Unleash
                      Your Creative Potential under the Guidance of Industry
                      Experts
                    </p>
                    <div className="card-actions">
                      <BtnJoin
                        color={"bg-[#818cf8]"}
                        textColor={"text-white"}
                        label={"Join Now"}
                      ></BtnJoin>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </Container>
        </div>

        {/* <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage='https://i.ibb.co/fHQLM2z/bg2.jpg'
                    bgImageAlt=""
                    strength={-200}
                >
                    <Container>
                        <Fade duration='1500'>
                            <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-1">
                                <div className="card w-full shadow-xl bg-slate-300 cardStyle">
                                    <figure className="px-10 pt-10"><img src='https://i.ibb.co/n7dDb9r/Screenshot-2.png' alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">DRONE CINEMATOGRAPHY</h2>
                                        <p>Drone operation lessons are included in our courses. Seize the opportunity to learn drone cinematic techniques, get a drone pilot licence and shoot breathtaking aerial footage for your showreel.</p>
                                        <div className="card-actions">
                                            <BtnJoin label={'Join Now!'} color={'bg-[#818cf8]'} textColor={'text-white'}></BtnJoin>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-full  shadow-xl bg-slate-300 cardStyle">
                                    <figure className="px-10 pt-10">
                                        <img src='https://i.ibb.co/9tv5RQp/Screenshot-1.png' alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">UNDERWATER CAMERA</h2>
                                        <p>We will introduce you the world of professional underwater cinematography. You will get OWD diving certificate, learn underwater camera and shoot a breathtaking footage.</p>
                                        <div className="card-actions">
                                            <BtnJoin color={'bg-[#818cf8]'} textColor={'text-white'} label={'Join Now'}></BtnJoin>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-full shadow-xl bg-slate-300 cardStyle">
                                    <figure className="px-10 pt-10">
                                        <img src='https://i.ibb.co/4mMQZkZ/Screenshot-16.png' alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">ACTION SCENES SHOOTING</h2>
                                        <p>Learn from the best how to direct and shoot both action and fighting scenes. Master efficient stuntmen coordination. The teacher of this module is president of Czech Stunt and Fighters Association. </p>
                                        <div className="card-actions">
                                            <BtnJoin color={'bg-[#818cf8]'} textColor={'text-white'} label={'Join Now'}></BtnJoin>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-full  shadow-xl bg-slate-300 cardStyle">
                                    <figure className="px-10 pt-10">
                                        <img src='https://i.ibb.co/BfbpLj2/11.jpg' alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">Art of Film Making</h2>
                                        <p>Immerse Yourself in the World of Cinematography, Editing, and Storytelling. Master the Technical Skills and Unleash Your Creative Potential under the Guidance of Industry Experts</p>
                                        <div className="card-actions">
                                            <BtnJoin color={'bg-[#818cf8]'} textColor={'text-white'} label={'Join Now'}></BtnJoin>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </Container>

                </Parallax> */}
      </div>
    </section>
  );
};

export default Speciality;
