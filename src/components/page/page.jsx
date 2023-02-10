import "./page.scss";
import { Link } from "react-router-dom";
import SectionHeading from "../sectionHeader/sectionsHeader";
const Page = ({ mainText, bgType, imageUrl }) => {
  return (
    <>
      <SectionHeading bgType={bgType} mainText={mainText} />
      <div className="contact_us my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="details-title">
                <h3>عنوان</h3>
              </div>
              <div className="details-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  totam voluptatibus sapiente ea dignissimos, quod quibusdam
                  incidunt nihil mollitia soluta!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <Link className="btn" to={"/contact-us"}>
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
      <div className="gym-machine my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex justify-content-between rounded">
                <div className="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div className="machine-text">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero architecto odit sit neque cumque explicabo. Lorem
                    ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex justify-content-between rounded">
                <div className="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div className="machine-text">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque eum officiis sit nisi at voluptas. A labore dolores
                    vel. Impedit?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex justify-content-between rounded">
                <div className="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div className="machine-text">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sunt numquam eius, cumque quae quaerat quia amet labore
                    totam omnis quas?
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-flex justify-content-between rounded">
                <div className="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div className="machine-text">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus eius repudiandae sit nostrum culpa quidem
                    maxime sequi ad. Maxime, asperiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <div className="details-title">
                <h3>عنوان</h3>
              </div>
              <div className="details-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  totam voluptatibus sapiente ea dignissimos, quod quibusdam
                  incidunt nihil mollitia soluta!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="learn-more">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="learn-more-details">
                <p>اعرف اكثر عن خدماتنا في {mainText} </p>
                <Link className="btn-details mx-auto" to={"/contact-us"}>
                  <i className="fas fa-arrow-right ms-3"></i>
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
