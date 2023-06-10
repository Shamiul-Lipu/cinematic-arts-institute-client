
const SectionTitle = ({ title, titleShort, textWhite }) => {
    return (
        <div className={`text-center py-10 ${textWhite ? 'text-white' : ''}`}>
            <h3 className="text-4xl pb-3 font-bold">{title}</h3>
            <p className="text-xl font-semibold">{titleShort}</p>
        </div>
    );
};

export default SectionTitle;