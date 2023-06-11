
const SectionTitle = ({ title, titleShort, textWhite }) => {
    return (
        <div className={`customDark t text-center py-10 text-indigo-600 ${textWhite ? 'text-white' : ''}`}>
            <h3 className="text-4xl pb-3 font-bold uppercase">{title}</h3>
            <p className="customDark text-xl text-indigo-900 font-semibold px-10 md:px-16">{titleShort}</p>
        </div>
    );
};

export default SectionTitle;