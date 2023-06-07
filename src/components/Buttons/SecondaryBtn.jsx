

const SecondaryBtn = ({ label }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                className={`font-semibold my-2 py-2 px-4 rounded-3xl shadow-2xl flex justify-center items-center gap-2 text-center hover:opacity-90 bg-indigo-400 mr-1 text-white`}
            >
                {label}
            </button>
        </div>
    );
};

export default SecondaryBtn;