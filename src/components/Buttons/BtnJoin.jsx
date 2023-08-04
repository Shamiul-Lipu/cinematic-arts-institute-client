import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BtnJoin = ({ label, color, textColor, animateBounce }) => {
  return (
    <div className="flex justify-center items-center">
      <Link to={"/login"}>
        <button
          className={`font-semibold my-3 py-2 px-4 rounded-md shadow-2xl flex justify-center items-center gap-2 text-center hover:opacity-90
                     ${color} 
                      ${textColor} ${animateBounce ? "animate-bounce" : ""}`}
        >
          {label} <FaLongArrowAltRight />
        </button>
      </Link>
    </div>
  );
};

export default BtnJoin;
