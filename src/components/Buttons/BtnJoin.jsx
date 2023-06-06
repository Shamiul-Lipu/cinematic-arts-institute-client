import { FaLongArrowAltRight } from "react-icons/fa";
const BtnJoin = ({ label, color, textColor }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                className={`font-semibold my-2 py-2 px-4 rounded-md shadow-2xl flex justify-center items-center gap-2 text-center hover:opacity-90
        ${color} 
        ${textColor}`}
            >
                {label} <FaLongArrowAltRight />
            </button>
        </div>
    );
};

export default BtnJoin;