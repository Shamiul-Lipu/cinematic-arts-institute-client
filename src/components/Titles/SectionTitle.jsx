
const SectionTitle = ({ title, titleShort }) => {
    return (
        <div className="text-center py-10">
            <h3 className="text-5xl pb-3 font-bold">{title}</h3>
            <p className="text-xl font-semibold">{titleShort}</p>
        </div>
    );
};

export default SectionTitle;