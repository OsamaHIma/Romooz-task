import SectionHeading from "../../components/sectionHeader/sectionsHeader";
import "./projects.scss";
const Projects = () => {
  return (
    <>
      <SectionHeading mainText={"المشاريع"} bgType={"projects-bg"} />
      <div className="container pt-3">
        <div className="row g-0">
          <div className="col-md-3 my-1">
            <div className="project-img my-4">
              <img src="/images/restaurant-interior.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8 mt-1 projects-details">
            <div className="project-details">
              <p>
                <strong>هذا النص مهم للمشاريع</strong>
              </p>
              <div className="d-flex">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  quisquam incidunt illum perferendis eaque amet dolorum
                  corporis quaerat magnam rerum, accusantium cumque, voluptatem
                  voluptas tenetur.
                </p>
                <button className="btn mx-2">صور المشاريع</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 my-1">
            <div className="project-img my-4">
              <img src="/images/restaurant-interior.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8 mt-1 projects-details">
            <div className="project-details">
              <p>
                <strong>هذا النص مهم للمشاريع</strong>
              </p>
              <div className="d-flex">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  atque, ab inventore illum consequatur facilis porro ut
                  dolorem, doloribus consequuntur, cumque ex enim ratione animi.
                </p>
                <button className="btn mx-2">صور المشاريع</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 my-1">
            <div className="project-img my-4">
              <img src="/images/restaurant-interior.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8 mt-1 projects-details">
            <div className="project-details">
              <p>
                <strong>هذا النص مهم للمشاريع</strong>
              </p>
              <div className="d-flex">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi ex maiores, tenetur pariatur minus dolore possimus rem
                  cumque laborum repellat fugit suscipit magnam, doloremque
                  commodi!
                </p>
                <button className="btn mx-2">صور المشاريع</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 my-1">
            <div className="project-img my-4">
              <img src="/images/restaurant-interior.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8 mt-1 projects-details">
            <div className="project-details">
              <p>
                <strong>هذا النص مهم للمشاريع</strong>
              </p>
              <div className="d-flex">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Neque omnis possimus voluptate esse itaque alias non, laborum,
                  doloribus ipsum recusandae amet dolor tempore. Doloribus,
                  ratione?
                </p>
                <button className="btn mx-2">صور المشاريع</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 my-1">
            <div className="project-img my-4">
              <img src="/images/restaurant-interior.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-8 mt-1 projects-details">
            <div className="project-details">
              <p>
                <strong>هذا النص مهم للمشاريع</strong>
              </p>
              <div className="d-flex">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit libero exercitationem assumenda magni?
                  Reiciendis cupiditate laborum vel alias autem, nihil
                  dignissimos placeat aperiam labore. Cum.
                </p>
                <button className="btn mx-2">صور المشاريع</button>
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
                <p>اعرف المزيد من التفاصيل</p>
                <button className="btn-details mx-auto px-3">
                  المزيد من التفاصيل
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
