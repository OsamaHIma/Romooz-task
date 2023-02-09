import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Page from "./components/page/page";
import Preloader from "./components/Preloader/Preloader";
import Navigation from "./Routes/Navigation/navigation";

const App = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              index
              element={
                <Page
                bgType={"gym-bg"}
                  mainText={"Gym"}
                  imageUrl={"../assets/images/icons8-bicycle-64.png"}
                />
              }
            />
            {/* <Route path="auth" element={<Authentication />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="check-out" element={<CheckOut />} />
            <Route path="orders" element={<Orders />} /> */}
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
