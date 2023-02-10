import "./sectionHeader.scss";
const SectionHeading = ({ bgType, mainText }) => {
  return (
    <div className={`main-bg ${bgType} home`}>
      <div className="title">
        <h1>{mainText}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
