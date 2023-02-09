import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../../components/Footer/footer";
import "./navigation.scss";
const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="nav-brand" to={"/"}>
            Tarkez
          </Link>
          <div
            className="offcanvas offcanvas-end  w-100 text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Trakez
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto">
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
                  <NavLink className="nav-link" to={"/projects"}>
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
          <div className="icons">
            <a href="">
              <i className="fa-solid fa-magnifying-glass mx-2 text-white"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-user mx-2 text-white"></i>
            </a>
          </div>
        </div>
      </nav>
      <Footer/>
    </>
  );
};
export default Navigation;
