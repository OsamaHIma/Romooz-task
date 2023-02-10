import SectionHeading from "../../components/sectionHeader/sectionsHeader";
import "./aboutUs.scss";
const AboutUs = () => {
  return (
    <>
      <SectionHeading mainText={"من نحن"} bgType={"gym-bg"} />
      <div className="container about-us">
        <div className="row py-5">
          <div className="col-md-7">
            <h5>عنوان خاص بهذا القسم</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis repellat id saepe culpa similique velit dolorem
              praesentium laborum nobis excepturi sed nulla assumenda veritatis
              quas quos hic, incidunt iusto omnis!
            </p>
          </div>
          <div className="col-md-5 img-col">
            <div className="about-us-img">
              <img src="/images/building.jpg" alt="" className="left" />
            </div>
          </div>

          <div className="col-md-5 img-col">
            <div className="about-us-img">
              <img src="./images/building2.jpg" alt="" className="right" />
            </div>
          </div>
          <div className="col-md-7">
            <h5>عنوان خاص بهذا القسم</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda eos eum placeat deleniti soluta corporis quos velit in,
              non ducimus modi minus sunt quia suscipit odit asperiores quisquam
              doloribus neque.
            </p>
          </div>

          <div className="col-md-7">
            <h5>عنوان خاص بهذا القسم</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
              voluptates cum praesentium deleniti ex sapiente dolorum dicta,
              quia reprehenderit, totam doloremque, odio voluptate dolorem velit
              eum distinctio perspiciatis vitae repellat?
            </p>
          </div>
          <div className="col-md-5 img-col">
            <div className="about-us-img">
              <img src="./images/building3.jpg" alt="" className="left" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
