import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link as LinkScroll } from "react-scroll";

const Layout = ({ children }) => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 0);
        });
    }, []);
    return (
        <>
            <Header />
            {/* <p style={{ position: "fixed", right: "5vw", bottom: "10vh", zIndex: "10" }}>
                Help now
            </p> */}
            <LinkScroll
                className="px-6 py-3 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none undefined"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                    setActiveLink("about");
                }}
                style={{ position: "fixed", right: "1vw", bottom: "1vh", zIndex: "10" }}
            >
                Help now
            </LinkScroll>
            {children}

            <Footer />
        </>
    );
};

export default Layout;
