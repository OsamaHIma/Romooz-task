import "./page.scss";
const Page = ({ mainText, bgType, imageUrl }) => {
  return (
    <>
      <div class={`main-bg ${bgType} home`}>
        <div class="title">
          <h1>{mainText}</h1>
        </div>
      </div>
      <div class="contact_us">
        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <div class="details-title">
                <h3>عنوان</h3>
              </div>
              <div class="details-prag">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  totam voluptatibus sapiente ea dignissimos, quod quibusdam
                  incidunt nihil mollitia soluta!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <button class="btn">اتصل بنا </button>
          </div>
        </div>
      </div>
      <div class="gym-machine my-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="d-flex justify-content-between rounded">
                <div class="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div class="machine-prag">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero architecto odit sit neque cumque explicabo.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="d-flex justify-content-between rounded">
                <div class="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div class="machine-prag">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque eum officiis sit nisi at voluptas. A labore dolores
                    vel. Impedit?
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="d-flex justify-content-between rounded">
                <div class="icon-img">
                  <img src={imageUrl} alt="" />
                </div>
                <div class="machine-prag">
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sunt numquam eius, cumque quae quaerat quia amet labore
                    totam omnis quas?
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="d-flex justify-content-between rounded">
                <div class="icon-img">
                  <img src={imageUrl} alt=""/>
                </div>
                <div class="machine-prag">
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
      <div class="contact_us">
        <div class="container">
          <div class="row">
            <div class="col-lg-10">
              <div class="details-title">
                <h3>عنوان</h3>
              </div>
              <div class="details-prag">
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
      <div class="learn-more">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="learn-more-details">
                <p>اعرف المزيد </p>
                <button class="btn-details">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
