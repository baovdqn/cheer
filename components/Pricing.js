import React, { useState, useEffect } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { Link as LinkScroll } from "react-scroll";

const Pricing = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [scrollActive, setScrollActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 0);
        });
    }, []);
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                        Our wish
                    </h3>
                    <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                        With the desire to contribute a small part of my strength to the people of
                        Ukraine We wish to be able to partially support medical supplies and
                        medicines for people people in refugee camps and concentration camps.
                        Hopefully through a small contribution yours and ourselves, the people of
                        Ukraine, is able to maintain life live and improve health in the current
                        difficult situation.
                    </p>
                    <Image src="/assets/peace.jpeg" alt="peace" height={500} width={100} />
                </div>
                <div className="flex flex-col w-full my-16">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
                        Proposed purpose
                    </h3>
                    <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
                        Token: Build a community for peace, build a support charity for the victims
                        of war in Ukraine in particular and around the world In general, that's what
                        we aim for.
                    </p>
                    <div className="py-12 w-full px-8 mt-16">
                        {/* <Maps className="w-full h-auto" /> */}
                    </div>
                    {/* <div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap">
            <img
              src="/assets/Icon/amazon.png"
              className="h-14 w-auto mt-4 lg:mt-2"
              alt=""
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/reddit.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto mt-2 lg:mt-0"
              alt=""
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto mt-2 lg:mt-0"
              alt=""
            />
          </div> */}
                </div>
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                        Testimonial
                    </h3>
                    <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
                        The call of those who have supported
                    </p>
                    <div className="w-full flex flex-col py-12">
                        <Testimoni />
                    </div>
                    <div className="relative w-full mt-16">
                        <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                            <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                                    Ukraine needs your help
                                </h5>
                                <p>
                                    Ukraine is in the middle of a humanitarian disaster. Hundreds of
                                    children have died. Thousands of adults have died. The people
                                    will continue their fight for freedom, but they need more
                                    ammunition and necessities.
                                </p>
                            </div>
                            <LinkScroll
                                className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none undefined"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                onSetActive={() => {
                                    setActiveLink("about");
                                }}
                            >
                                Help now
                            </LinkScroll>
                        </div>
                        <div
                            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                            style={{ filter: "blur(114px)" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
