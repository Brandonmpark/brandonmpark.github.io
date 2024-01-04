import { Link, Route, Routes, useLocation } from "react-router-dom";
import "typeface-lato";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import "./app.scss";
import "./index.scss";

const App = () => {
    const location = useLocation();
    return (
        <>
            <section id="pageContainer">
                <section id="pageContents">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>

                    <nav>
                        <ul>
                            <li
                                className={
                                    location.pathname === "/" ? "activeNav" : ""
                                }
                            >
                                <Link to="/">home</Link>
                            </li>
                            <li
                                className={
                                    location.pathname === "/resume"
                                        ? "activeNav"
                                        : ""
                                }
                            >
                                <Link to="/resume">resume</Link>
                            </li>
                            <li
                                className={
                                    location.pathname === "/contact"
                                        ? "activeNav"
                                        : ""
                                }
                            >
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
            <p
                style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    margin: "0.8em",
                    fontSize: "0.8em",
                }}
            >
                made with react, sass, and tsparticles in 2024
            </p>
        </>
    );
};

export default App;
