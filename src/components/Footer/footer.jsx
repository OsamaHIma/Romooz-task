import { NavLink, Outlet } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
    <Outlet/>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="logo text-center mb-3">
                <p>Tarkez</p>
              </div>
              <div className="social-icons mb-3">
                <ul className="nav">
                  <li className="nav-item">
                    <a href="">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="">
                      <i className="fa-brands fa-snapchat"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-links pb-4">
                <ul className="main-menu">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/"}>
                      الرئيسيه
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/about-us"}>
                      من نحن
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/projects">
                      المشاريع
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/images"}>
                      الصور
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/contact-us"}>
                      اتصل بنا
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rights-footer text-center">
          <p>{date} &copy; جميع الحقوق محفوظه</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
