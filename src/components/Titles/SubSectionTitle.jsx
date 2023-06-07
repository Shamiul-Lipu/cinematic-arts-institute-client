
const SubSectionTitle = ({ title, titleShort }) => {
    return (
        <div className="text-center ">
            <h3 className="text-2xl py-2 font-bold">{title}</h3>
            <p className="text-xl font-semibold">{titleShort}</p>
        </div>
    );
};

export default SubSectionTitle;