import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./Routes/Navigation/navigation";
import Preloader from "./components/Preloader/Preloader";
import Page from "./components/page/page";
import ContactUs from "./Routes/Contact-us/contact-us";
import Projects from "./Routes/projects/projects";
import AboutUs from "./Routes/AboutUs/aboutUS";

const App = () => {
  let [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              path="gym"
              index
              element={
                <Page
                  bgType={"gym-bg"}
                  mainText={"تجهيز صالات الجيم"}
                  imageUrl={"/images/icons8-bicycle-64.png"}
                />
              }
            />
            <Route
              path="kitchens"
              index
              element={
                <Page
                  bgType={"restaurant-bg"}
                  mainText={"تجهيز المطاعم"}
                  imageUrl={"/images/icons8-bicycle-64.png"}
                />
              }
            />
            <Route
              path="cafes"
              index
              element={
                <Page
                  bgType={"coffe-bg"}
                  mainText={"تجهيز الكافيهات"}
                  imageUrl={"/images/icons8-bicycle-64.png"}
                />
              }
            />
            <Route path="/" element={<Projects />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<AboutUs />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
