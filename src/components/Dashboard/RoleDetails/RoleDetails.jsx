import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Slide, Fade } from "react-awesome-reveal";

const RoleDetails = () => {
    const { user, role } = useContext(AuthContext);

    return (
        <>

            <div className="flex gap-2 py-2 bg-indigo-200 px-2 rounded-e-lg mx-2">
                <Slide direction="right">
                    <div className="avatar online">
                        <div className="w-24 rounded-xl">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </Slide>
                <Fade duration='4000'>
                    <div className="font-semibold px-5">
                        <h5 className="uppercase">{user?.displayName}</h5>
                        <h6>{user?.email}</h6>
                        <h6 className="uppercase p-1 bg-green-50 rounded-lg text-center">{role}</h6>
                    </div>
                </Fade>
            </div>

        </>
    );
};

export default RoleDetails;