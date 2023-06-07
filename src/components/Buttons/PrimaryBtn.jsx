
const PrimaryBtn = ({ label, onClick, type, disabled, icon: Icon }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
            className={` relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition px-4 w-full  bg-indigo-600  border-indigo-600 text-white font-semibold py-3`}
        >
            {Icon && (
                <Icon
                    size={24}
                    className='
                absolute
                left-4
                top-3
              '
                />
            )}
            {label}
        </button>
    );
};

export default PrimaryBtn;