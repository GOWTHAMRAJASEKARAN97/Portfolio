import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Index";
import Navbar from "./components/navbar/Index";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import { ToastContainer } from "./utils/toast/Index";
import "react-toastify/dist/ReactToastify.css";
import TechStack from "./components/teckstack/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact cb={() => {}} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
