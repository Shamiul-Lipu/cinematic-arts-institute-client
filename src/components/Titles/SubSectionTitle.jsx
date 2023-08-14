const SubSectionTitle = ({ title, titleShort, textWhite }) => {
  return (
    <div className={`text-center py-2 ${textWhite ? "text-white" : ""}`}>
      <h3 className="text-2xl py-2 font-bold">{title}</h3>
      <p className="text-xl font-semibold">{titleShort}</p>
    </div>
  );
};

export default SubSectionTitle;
