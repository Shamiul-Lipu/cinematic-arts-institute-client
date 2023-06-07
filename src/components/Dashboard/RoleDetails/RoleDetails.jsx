import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const RoleDetails = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="flex gap-2 py-2">
                <div className="avatar online">
                    <div className="w-24 rounded-xl">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className="font-semibold">
                    <h5>{user?.displayName}</h5>
                    <h6>{user?.email}</h6>
                    <h6>user role</h6>
                </div>
            </div>
        </>
    );
};

export default RoleDetails;