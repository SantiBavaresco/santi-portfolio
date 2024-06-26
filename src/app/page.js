"use client";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import "../../styles/magic.css";
import "node_modules/flag-icons/css/flag-icons.min.css";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiFillGithub,
    AiOutlineInstagram,
    AiOutlineMail,
} from "react-icons/ai";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ImageCarousel from "../app/carousel.jsx"
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import ImageCarousel from "../app/ImageCarousel";
import Footer from "../app/Footer";
import santi from "../../public/santi-avatar.png";
import santi1 from "../../public/avatar.png";
import cpu from "../../public/cpu.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import usa from "../../public/flag-usa.png";
import spa from "../../public/flag-spa.png";

import web_1_1 from "../../public/web_1_1.png";
import web_1_2 from "../../public/web_1_2.png";
import web_1_3 from "../../public/web_1_3.png";

import web_2_1 from "../../public/web_2_1.png";
import web_2_2 from "../../public/web_2_2.png";
import web_2_3 from "../../public/web_2_3.png";
import web_2_4 from "../../public/web_2_4.png";

import web_3_1 from "../../public/web_3_1.png";
import web_3_2 from "../../public/web_3_2.png";
import web_3_3 from "../../public/web_3_3.png";

import web_4_1 from "../../public/web_4_1.png";
import web_4_2 from "../../public/web_4_2.png";
import web_4_3 from "../../public/web_4_3.png";
import web_4_4 from "../../public/web_4_4.png";

import web_5_1 from "../../public/web_5_1.png";
import web_5_2 from "../../public/web_5_2.png";
import web_5_3 from "../../public/web_5_3.png";
import web_5_4 from "../../public/web_5_4.png";

import web_6_1 from "../../public/web_6_1.png";
import web_6_2 from "../../public/web_6_2.png";
import web_6_3 from "../../public/web_6_3.png";

import web_b from "../../public/web_b.png";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 
  text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8`;

    const [isActive, setIsActive] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleChangeOrder = (event) => {
        setLanguage(event.target.value);
    };
    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <main className="bg-gray-100 px-10 dark:bg-gray-800 md:px-20 lg:px-60">
                <section className="min-h-screen">
                    {/* ------------------------------ NAV BAR ------------------------------ */}
                    <nav className="py-10 mb-2 flex justify-between items-center">
                        <h1 className="text-xl font-burtons dark:text-white">
                            developedBySanti
                        </h1>

                        <ul className="flex items-center">
                            <li>
                                {darkMode ? (
                                    <BsFillSunFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="cursor-pointer text-2xl text-white
                      hvr_pulse
                      
                      "
                                    />
                                ) : (
                                    <BsFillMoonStarsFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className='cursor-pointer text-2xl
                      hvr_pulse
                      className="transition duration-300 ease-in-out hover:shadow-xl'
                                    />
                                )}
                            </li>
                            <li>
                                <a
                                    href="https://drive.google.com/drive/folders/135_JZRT6MJPaVK0zFO9-XUQqB4Fq251x?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        className="
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                        href=""
                                    >
                                        Resume
                                    </button>
                                </a>
                            </li>
                            <li>
                                {/* <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  data-te-select-init onChange={handleChangeOrder} value={language}>
                  <option value="en"> <img src={usa} className="w-6" /> </option>
                  <option value="es">Spanish  </option>
                  <option value="it">Three</option>
                  <option value="it">Three</option>
                </select> */}
                            </li>
                            <li> </li>
                        </ul>
                    </nav>
                    {/* ------------------------------ PROLOGO ------------------------------ */}
                    <div className="text-center px-1">
                        <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-7xl">
                            Santiago Bavaresco
                        </h2>
                        <h3 className="text-2xl py-2 md:text-4xl dark:text-white">
                            Fullstack Developer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
                            Passionate in software development and IT world,
                            providing services for programming and tech
                            infrastucture. Join me down below and let&apos;s get
                            dive in!
                        </p>
                    </div>

                    {/* ------------------------------ LINKS ------------------------------ */}
                    <div className="relative text-5xl flex justify-center py-3 text-gray-600 dark:text-gray-500">
                        <ul className="flex flex-nowrap gap-10">
                            <li className="group transition-all duration-[1000ms] ease-in-out hover:me-[140px]">
                                <a
                                    href="https://github.com/SantiBavaresco"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <AiFillGithub className="text-gray-600 dark:text-gray-200 group-hover:text-green-500" />
                                        <p
                                            className="absolute left-[22%] top-5 text-xl transition-opacity duration-[2000ms] ease-out 
                    group-hover:ease-in opacity-0 text-gray-800 dark:text-gray-300 group-hover:opacity-100 lg:left-[37%] md:left-[34%]"
                                        >
                                            /SantiBavaresco
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li className="group transition-all duration-[1000ms] ease-in-out hover:me-[200px]">
                                <a
                                    href="https://www.linkedin.com/in/santiago-bavaresco/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <AiFillLinkedin className="text-blue-400 group-hover:text-blue-600" />
                                        <p
                                            className="absolute left-[34%] top-5 text-xl transition-opacity duration-[1000ms] ease-out 
                    group-hover:ease-in opacity-0 text-gray-800 dark:text-gray-300 group-hover:opacity-100 lg:left-[43%] md:left-[41%]"
                                        >
                                            /in/santiago-bavaresco/
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li className="group transition-all duration-[1000ms] ease-in-out hover:me-[200px]">
                                <a
                                    href="https://www.instagram.com/santistalker/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="">
                                        <AiOutlineInstagram className="text-purple-400 group-hover:text-violet-600 " />
                                        <div
                                            className="absolute left-[53%] top-5 text-xl transition-opacity duration-[2000ms] ease-out 
                    group-hover:ease-in opacity-0 text-gray-800 dark:text-gray-300 group-hover:opacity-100 lg:left-[53%] md:left-[53%]"
                                        >
                                            <p className="flex flex-nowrap gap-1">
                                                @santistalker
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* ------------------------------ AVATAR SANTI ------------------------------ */}
                    <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 my-10 overflow-hidden md:h-96 md:w-96">
                        <Image src={santi} className="mt-2" alt="1" />
                    </div>
                </section>

                {/* ------------------------------ PROYECTS ------------------------------ */}
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">
                            Projects
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                            I bring interfaces to life with{" "}
                            <span className="text-orange-500">
                                React (NextJS- Tailwind)
                            </span>
                            , crafting user-centric experiences with develop
                            cross-platform mobile apps using{" "}
                            <span className="text-teal-500">React Native</span>{" "}
                            , efficiently manage databases with{" "}
                            <span className="text-cyan-500">PostgreSQL</span>,
                            and utilize{" "}
                            <span className="text-cyan-500">MongoDB</span> for
                            flexible NoSQL storage, and write clean code with{" "}
                            <span className="text-yellow-500">JavaScript</span>.
                            With my Fullstack capabilities, I deliver
                            comprehensive solutions across platforms.
                        </p>
                    </div>

                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap md:flex-col sm:flex-col">
                        <div className="flex flex-col p-4 lg:flex-row  sm:flex-col bg-gray-600 rounded-xl">
                          <div className="flex flex-col items-center">
                            <span className="inline-block mb-2 py-1 px-2 rounded bg-yellow-50 text-yellow-500 text-xl font-medium tracking-widest dark:bg-yellow-500 dark:text-gray-900">
                            Contract Projects
                            </span>
                        <div className="lg:flex gap-10">
                            {/* ------------------------------ Electroterma ------------------------------ */}
                            <div className="basis-1/3 flex-1">
                                <div className=" flex flex-row justify-center gap-4">
                                    <a
                                        // href="https://electroterma-red.vercel.app/soler&palau/TSA"
                                        // target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <h2
                                            className=" text-center
                                              bg-gradient-to-r from-cyan-500 to-teal-500
                                              text-white px-4 py-2 my-2 rounded-xl ml-8
                                              hvr_pulse
                                              transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                        >
                                            Electroterma (in progress)
                                        </h2>
                                    </a>
                                    <a
                                        href="https://github.com/electroterma"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 rounded-full hover:shadow-xl dark:hover:shadow-white/30" />
                                    </a>
                                </div>
                                <Carousel
                                    showThumbs={false}
                                    autoPlay
                                    infiniteLoop
                                    showStatus={false}
                                >
                                    <ImageCarousel
                                        keydiv="1"
                                        // image={web_5_1}
                                        image={web_b}
                                        alt="1"
                                    />
                                    <ImageCarousel
                                        keydiv="2"
                                        image={web_b}
                                        // image={web_5_2}
                                        alt="1"
                                    />
                                    <ImageCarousel
                                        keydiv="3"
                                        image={web_b}
                                        // image={web_5_3}
                                        alt="1"
                                    />
                                    <ImageCarousel
                                        keydiv="4"
                                        image={web_b}
                                        // image={web_5_4}
                                        alt="1"
                                    />
                                    {/* <ImageCarousel keydiv="4" image={web_4_4} alt="1"/> */}
                                </Carousel>
                            </div>
                            {/* ------------------------------ Araceli Tarot ------------------------------ */}
                            <div className="basis-1/3 flex-1">
                                <div className=" flex flex-row justify-center gap-4">
                                    <a
                                        href="https://www.aracelitarot.com.ar/cursos"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <h2
                                            className=" text-center
                    bg-gradient-to-r from-cyan-500 to-teal-500
                    text-white px-4 py-2 my-2 rounded-xl ml-8
                    hvr_pulse
                    transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                        >
                                            Araceli Tarot
                                        </h2>
                                    </a>
                                    <a
                                        href="https://github.com/aracelitarot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 rounded-full hover:shadow-xl dark:hover:shadow-white/30" />
                                    </a>
                                </div>
                                <Carousel
                                    showThumbs={false}
                                    autoPlay
                                    infiniteLoop
                                    showStatus={false}
                                >
                                    <ImageCarousel
                                        keydiv="1"
                                        image={web_6_1}
                                        alt="1"
                                    />
                                    <ImageCarousel
                                        keydiv="2"
                                        image={web_6_2}
                                        alt="1"
                                    />
                                    <ImageCarousel
                                        keydiv="3"
                                        image={web_6_3}
                                        alt="1"
                                    />
                                    {/* <ImageCarousel keydiv="4" image={web_4_4} alt="1"/> */}
                                </Carousel>
                            </div>
                            </div>
                            </div>
                        </div>
                        {/* ------------------------------ Eat Out ------------------------------ */}
                        <div className="basis-1/3 flex-1">
                            <div className=" flex flex-row justify-center gap-4">
                                <a
                                    href="https://expo.dev/accounts/eatoutpf/projects/EatOut/builds/3d73abef-bb86-4afc-976f-352510fbd43f"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2
                                        className=" text-center
                    bg-gradient-to-r from-cyan-500 to-teal-500
                    text-white px-4 py-2 my-2 rounded-xl ml-8
                    hvr_pulse
                    transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                    >
                                        EatOut - Restaurant Reservations
                                    </h2>
                                </a>
                                <a
                                    href="https://github.com/EatOutPF/PF/tree/develop/FRONT/Native-2.0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 rounded-full hover:shadow-xl dark:hover:shadow-white/30" />
                                </a>
                            </div>
                            <Carousel
                                showThumbs={false}
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                            >
                                <ImageCarousel
                                    keydiv="1"
                                    image={web_4_1}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="2"
                                    image={web_4_2}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="3"
                                    image={web_4_3}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="4"
                                    image={web_4_4}
                                    alt="1"
                                />
                                {/* <ImageCarousel keydiv="4" image={web_4_4} alt="1"/> */}
                            </Carousel>
                        </div>
                        {/* ------------------------------ Eat Out Dashboar ------------------------------ */}
                        <div className="basis-1/3 flex-1">
                            <div className=" flex flex-row justify-center gap-4">
                                <a
                                    href="https://eatout-lac.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2
                                        className="text-center
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 my-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                    >
                                        Dashboard EatOut - Admin{" "}
                                    </h2>
                                </a>
                                <a
                                    href="https://github.com/EatOutPF/PF/tree/develop/FRONT/react-admin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="text-5xl pt-1  hvr_pulse text-gray-600 dark:text-gray-200 rounded-full hover:shadow-xl dark:hover:shadow-white/30" />
                                </a>
                            </div>
                            <Carousel
                                showThumbs={false}
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                            >
                                <ImageCarousel
                                    keydiv="1"
                                    image={web_3_1}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="2"
                                    image={web_3_2}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="3"
                                    image={web_3_3}
                                    alt="1"
                                />
                            </Carousel>
                        </div>
                        {/* ------------------------------ PI Countries ------------------------------ */}
                        <div className="basis-1/3 flex-1">
                            <div className=" flex flex-row justify-center gap-4">
                                <a
                                    href="https://henry-pi-countries-six.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2
                                        className="text-center
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 my-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                    >
                                        Countries - Henry PI
                                    </h2>
                                </a>
                                <a
                                    href="https://github.com/SantiBavaresco/Henry-PI-Countries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 rounded-full hover:shadow-xl dark:hover:shadow-white/30" />
                                </a>
                            </div>
                            <Carousel
                                showThumbs={false}
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                            >
                                <ImageCarousel
                                    keydiv="1"
                                    image={web_2_1}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="2"
                                    image={web_2_2}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="3"
                                    image={web_2_3}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="4"
                                    image={web_2_4}
                                    alt="1"
                                />
                            </Carousel>
                        </div>
                        {/* ------------------------------ Rick & Morty ------------------------------ */}
                        <div className="basis-1/3 flex-1">
                            <div className=" flex flex-row justify-center gap-4">
                                <a
                                    href="https://www.linkedin.com/posts/santiago-bavaresco_checkpoint-m2-frontend-activity-7006828658598285312-AWPK?utm_source=share&utm_medium=member_desktop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <h2
                                        className="text-center
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 my-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30"
                                    >
                                        Rick & Morty - Henry M2
                                    </h2>
                                </a>
                                <a
                                    href="https://github.com/SantiBavaresco/Rick-Morty"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 rounded-full hover:shadow-xl dark:hover:shadow-white/30" />
                                </a>
                            </div>
                            <Carousel
                                showThumbs={false}
                                autoPlay
                                infiniteLoop
                                showStatus={false}
                            >
                                <ImageCarousel
                                    keydiv="1"
                                    image={web_1_1}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="3"
                                    image={web_1_2}
                                    alt="1"
                                />
                                <ImageCarousel
                                    keydiv="4"
                                    image={web_1_3}
                                    alt="1"
                                />
                            </Carousel>
                        </div>
                        {/* <div className="basis-1/3 flex-1">
              <div className=" flex flex-row justify-center">
                <h2 className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">News Web - Cards</h2>
              </div>
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <ImageCarousel keydiv="1" image={web1} alt="1"/>
                <ImageCarousel keydiv="2" image={web6} alt="1"/>
                <ImageCarousel keydiv="3" image={web2} alt="1"/>
                <ImageCarousel keydiv="4" image={web3} alt="1"/>
              </Carousel>
            </div> */}
                    </div>
                </section>

                {/* ------------------------------ SERVICES & TOOLS ------------------------------ */}
                <section>
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">
                            {" "}
                            Services I offer
                        </h3>
                        <p className="text-md py-2 leading-8 text-justify text-gray-800 dark:text-gray-300">
                            With a proactive, analytical, creative and
                            professional approach with the capacity for
                            planning, organization and team leadership; also
                            with skills and criteria for decision making and{" "}
                            <span className="text-teal-500">
                                problem solving
                            </span>{" "}
                            labor problems, common sense, security and permanent
                            dialogue{" "}
                            <span className="text-teal-500">
                                to meet the objectives
                            </span>{" "}
                            with different areas.
                        </p>

                        <p className="text-md py-2 leading-8 text-justify text-gray-800 dark:text-gray-300">
                            I&apos;m a Full Stack Developer with a strong focus
                            and a passion for solving complex challenges. I also
                            excel in Front End development, enhancing user
                            experiences with visually appealing interfaces. My
                            expertise extends to React Native for mobile app
                            development, enabling me to create cross-platform
                            applications. Delivering high-quality, seamless
                            applications that meet user needs.
                        </p>
                    </div>
                    {/* --------------------------------------- CARDS --------------------------------------- */}
                    <div className="lg:flex gap-10">
                        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1">
                            <div className="flex justify-center">
                                <Image
                                    claseName="flex justify-center"
                                    src={code}
                                    width={100}
                                    height={100}
                                    alt="1"
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white">
                                {" "}
                                Code your project
                            </h3>
                            <p className="py-2 dark:text-gray-300">
                                {" "}
                                Do you have an idea for you next great website?
                                Let&apos;s make it a reality!
                            </p>
                            <h4 className="py-4 text-teal-600">
                                Development knowledge
                            </h4>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                React, React-Native
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                NextJS, Tailwind
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                PostGres, MongoDB
                            </p>
                        </div>
                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1">
                            <div className="flex justify-center">
                                <Image
                                    claseName="flex justify-center"
                                    src={cpu}
                                    width={100}
                                    height={100}
                                    alt="1"
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white">
                                {" "}
                                Connectivity and Security
                            </h3>
                            <p className="py-2 dark:text-gray-300">
                                {" "}
                                Creating robust and secure IT infrastructure,
                                networking, and security systems to meet your
                                needs.
                            </p>
                            <h4 className="py-4 text-teal-600">
                                {" "}
                                Implementations
                            </h4>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                Network & Hardware Setup
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                CCTV, Alarms & Security Sys.
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                Fiber Optic Splicer & FTTH{" "}
                            </p>
                        </div>
                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        <div className=" text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-700 flex-1">
                            <div className="flex justify-center">
                                <Image
                                    claseName="flex justify-center"
                                    src={consulting}
                                    width={100}
                                    height={100}
                                    alt="1"
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white">
                                {" "}
                                Consulting
                            </h3>
                            <p className="py-2 dark:text-gray-300">
                                {" "}
                                Are you interested in feedback for your current
                                project? I can give you tips and tricks to level
                                it up.
                            </p>
                            <h4 className="py-4 text-teal-600">
                                Desing tools i use
                            </h4>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                Front-End, Web, UX/UI
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                Back-End, Databases
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                Home Servers, Datacenters
                            </p>
                        </div>
                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                    </div>
                </section>

                {/* ------------------------------ BACKGROUND ------------------------------ */}
                <section className="pb-4">
                    <div>
                        <h3 className="text-3xl py-1 dark:text-white">
                            {" "}
                            My Background
                        </h3>

                        <div className=" text-md ml-4 py-2 text-gray-800 dark:text-gray-300">
                            <button
                                className=" border rounded-full py-2 text-left 'bg-gray-100 px-4 dark:bg-gray-800 dark:hover:bg-gray-700
                    hover:bg-gray-400 flex items-center justify-between"
                                onClick={handleClick}
                            >
                                <span>Read more ... </span>
                                <span className="ml-2">
                                    {isActive ? (
                                        <svg
                                            className="h-4 w-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.707 8.707a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="h-4 w-4 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </button>
                            {isActive && (
                                <div className="shadow-lg py-3  rounded-xl bg-gray-200 mt-2 px-10 text-justify dark:bg-gray-800">
                                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                                        I am a husband, father of a little boy,
                                        very good friend, and a passionate
                                        developer who is always looking for new
                                        challenges and opportunities to grow.
                                    </p>

                                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                                        I began my career path in high school
                                        where I studied as a technician and
                                        programmer. This early exposure to
                                        programming and electronics laid a
                                        strong foundation for my future career
                                        in technology. After completing my
                                        studies, I started working in the
                                        industry of electronic security systems
                                        and hardware. This role allowed me to
                                        develop my technical skills and gave me
                                        a practical understanding of how
                                        technology can be applied in real-world
                                        scenarios.
                                    </p>

                                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                                        As I gained more experience in the tech
                                        industry, I became increasingly
                                        interested in the analytical side of
                                        systems. I made the transition to
                                        working in IT analysis, where I had the
                                        opportunity to work with large data sets
                                        and identify patterns and trends that
                                        helped businesses make informed
                                        decisions. This experience further
                                        expanded my skill set and gave me a
                                        deeper understanding of how technology
                                        can drive business growth and success.
                                    </p>

                                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                                        Despite my success in IT analysis, I
                                        found myself wanting to take my skills
                                        to the next level and become a
                                        developer. I was drawn to the challenge
                                        of creating innovative solutions and
                                        bringing ideas to life through code. I
                                        decided to take the leap and began
                                        pursuing development full-time.
                                    </p>

                                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                                        I am now excited to continue growing and
                                        learning as a developer. I am passionate
                                        about creating clean, efficient, and
                                        effective code that solves complex
                                        problems and drives business success. I
                                        believe that technology has the power to
                                        transform the world and I am thrilled to
                                        be a part of this exciting industry.
                                    </p>

                                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
                                        Thank you for taking the time to read
                                        about my journey. I look forward to
                                        connecting with fellow developers and
                                        collaborating on innovative projects.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className=" max-w-3xl mx-auto">
                        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                        <div className=" text-center shadow-lg p-10 rounded-xl mb-10 mt-2 dark:bg-gray-700">
                            <div className="flex justify-center">
                                <Image
                                    claseName="flex justify-center"
                                    src={santi1}
                                    width={120}
                                    height={120}
                                    alt="1"
                                />
                            </div>
                            <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white">
                                {" "}
                                About Santi{" "}
                            </h3>
                            <p className="py-2 dark:text-gray-300">
                                {" "}
                                I&apos;m a friendly 29-year-old from Argentina.
                            </p>
                            <h3 className="py-4 text-teal-600">
                                Things I like
                            </h3>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                ⚡ Fun fact: I love Airsoft, very good
                                strategist and a lot of good camaraderie. 🔫
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                🏕️ I love hanging out outdoors or parks, camping
                                and fishing. 🎣
                            </p>
                            <p className="text-gray-800 py-1 dark:text-gray-300">
                                🌱 I’m looking to learn new technologies. 📈
                            </p>
                            {/* <p className="text-gray-800 py-1 dark:text-gray-300">📫 How to reach me <a>santiagobavaresco@gmail.com</a></p> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
