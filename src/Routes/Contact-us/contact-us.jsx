import SectionHeading from "../../components/sectionHeader/sectionsHeader";
import "./contact-us.scss";
const ContactUs = () => {
  const formHandler = (event) => {
    if (!event.target.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.target.classList.add("was-validated");
  };
  return (
    <>
      <SectionHeading mainText={"تواصل معنا"} bgType={"contact-bg"} />
      <div className="contact-us">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4">
              <div className="contact-icon">
                <i className="fa-sharp fa-solid fa-location-dot"></i>
              </div>
              <p className="contact-details">Our location</p>
            </div>
            <div className="col-4">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p className="contact-details">Email</p>
            </div>
            <div className="col-4">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p className="contact-details">Phone</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container form">
        <div className="row ">
          <div className="col-12">
            <form
              onSubmit={formHandler}
              action="https://getform.io/f/56b689bb-f17f-4bb9-b8f4-0386edd2f054"
              method="POST"
              encType="multipart/form-data"
              className="needs-validation text-right"
              noValidate
            >
              <div className="form-group">
                <label>الاسم الكامل</label>
                <input
                  type="name"
                  className="form-control rounded px-3"
                  name="name"
                  minLength={"4"}
                  required
                />
                <div className="invalid-feedback">
                  Your Full name must be at least 4 characters long.
                </div>
              </div>
              <div className="contact-info d-flex justify-content-between">
                <div className="form-group">
                  <label>رقم الهاتف</label>
                  <input type="phone" name="phone" required className="px-3" />
                  <div className="invalid-feedback">Invalid phone number</div>
                </div>
                <div className="form-group">
                  <label>ايميل</label>
                  <input type="email" name="email" required className="px-3" />
                  <div className="invalid-feedback">Invalid email</div>
                </div>
              </div>
              <input
                type="file"
                id="file-uploader"
                name="file"
                className="form-control w-50"
              />

              <div id="feedback"></div>
              <div className="form-group">
                <label>الرساله</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  minLength={"16"}
                  required
                ></textarea>
                <div className="invalid-feedback">
                  Your message should be at least 16 characters.
                </div>
                {/* a hidden Honeypot input to prevent spams  */}
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none !important" }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane ms-3"></i>
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1657551692935!6m8!1m7!1sgT28ssf0BB2LxZ63JNcL1w!2m2!1d35.70407437075822!2d139.5577317304603!3f297.2477871110872!4f-21.116245064170727!5f0.7820865974627469"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-100 map-height"
        ></iframe>
      </div>
      <div className="learn-more">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="learn-more-details">
                <p>اعرف اكثر عنا </p>
                <button className="btn-details mx-auto">Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
