"use client";
import React from "react";
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"
import { useState, useEffect } from "react";
import "../../styles/magic.css"
import {
  AiFillTwitterCircle, 
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram
} from "react-icons/ai"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import ImageCarousel from "../app/carousel.jsx"
import Image from "next/image"
import ImageCarousel from "../app/ImageCarousel"
import santi from "../../public/santi-avatar.png"
import santi1 from "../../public/avatar.png"
import cpu from "../../public/cpu.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"

import web_1_1 from "../../public/web_1_1.png"
import web_1_2 from "../../public/web_1_2.png"
import web_1_3 from "../../public/web_1_3.png"

import web_2_1 from "../../public/web_2_1.png"
import web_2_2 from "../../public/web_2_2.png"
import web_2_3 from "../../public/web_2_3.png"
import web_2_4 from "../../public/web_2_4.png"

import web_3_1 from "../../public/web_3_1.png"
import web_3_2 from "../../public/web_3_2.png"
import web_3_3 from "../../public/web_3_3.png"

import web_4_1 from "../../public/web_4_1.png"
import web_4_2 from "../../public/web_4_2.png"
import web_4_3 from "../../public/web_4_3.png"
import web_4_4 from "../../public/web_4_4.png"

export default function Home() {  
  const [darkMode, setDarkMode] = useState(true)
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-600 via-indigo-700 to-indigo-900 
  text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
  hover:bg-white  hover:text-white hover:ring-slate-300 mx-8`;

  return (
      <div className={`${darkMode ? 'dark' : ''}`}> 
        <main className='bg-gray-100 px-10 dark:bg-gray-800 md:px-20 lg:px-60'>
          <section className='min-h-screen'>

    {/* ------------------------------ NAV BAR ------------------------------ */}
            <nav className='py-10 mb-2 flex justify-between '>

              <h1 className='text-xl font-burtons dark:text-white'>developedBySanti</h1>

              <ul className='flex items-center'>
                <li >
                  {darkMode ? 
                    <BsFillSunFill 
                      onClick={() => setDarkMode(!darkMode)}
                      className='cursor-pointer text-2xl text-white
                      hvr_pulse
                      
                      '
                    />
                    : 
                    <BsFillMoonStarsFill 
                      onClick={() => setDarkMode(!darkMode)}
                      className='cursor-pointer text-2xl
                      hvr_pulse
                      className="transition duration-300 ease-in-out hover:shadow-xl' 
                    />                
                  }
                </li>
                <li > 
                  <a href="https://drive.google.com/drive/folders/135_JZRT6MJPaVK0zFO9-XUQqB4Fq251x?usp=drive_link" 
                    target="_blank" rel="noopener noreferrer">
                    <button 
                      className='
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30' 
                      
                      href="">
                        Resume  
                    </button> 
                  </a>
                </li>
                <li></li>
                <li></li>
              </ul>

            </nav>
    {/* ------------------------------ PROLOGO ------------------------------ */}
            <div className='text-center px-1'>
              <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-7xl'>Santiago Bavaresco</h2>
              <h3 className='text-2xl py-2 md:text-4xl dark:text-white'>Fullstack Developer</h3>
              <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300'>
                Passionate about in software development and IT world, providing services for programming and tech infrastucture.
                Join me down below and let's get dive in!
              </p>
            </div>

    {/* ------------------------------ LINKS ------------------------------ */}
        <div className="relative text-5xl flex justify-center py-3 text-gray-600 dark:text-gray-500">
          <ul className="flex flex-nowrap gap-10">
            <li className="group transition-all duration-[1000ms] ease-in-out hover:me-[140px]">
              <a href="https://github.com/SantiBavaresco" target="_blank" rel="noopener noreferrer">
                <div className="">
                  <AiFillGithub className="text-gray-600 dark:text-gray-200 group-hover:text-green-500" />
                  <p className="absolute left-[22%] top-5 text-xl transition-opacity duration-[2000ms] ease-out 
                    group-hover:ease-in opacity-0 text-gray-800 dark:text-gray-300 group-hover:opacity-100 lg:left-[38%] md:left-[32%]">
                    /SantiBavaresco
                  </p>
                </div>
              </a>
            </li>
            <li className="group transition-all duration-[1000ms] ease-in-out hover:me-[200px]">
              <a href="https://www.linkedin.com/in/santiago-bavaresco/" target="_blank" rel="noopener noreferrer">
                <div className="">
                  <AiFillLinkedin className="text-blue-400 group-hover:text-blue-600" />
                  <p className="absolute left-[34%] top-5 text-xl transition-opacity duration-[1000ms] ease-out 
                    group-hover:ease-in opacity-0 text-gray-800 dark:text-gray-300 group-hover:opacity-100 lg:left-[43%] md:left-[41%]">
                    /in/santiago-bavaresco/
                  </p>
                </div>
              </a>
            </li>
            <li className="group transition-all duration-[1000ms] ease-in-out hover:me-[200px]">
              <a href="https://www.instagram.com/santistalker/" target="_blank" rel="noopener noreferrer">
                <div className="">
                  <AiOutlineInstagram className="text-purple-400 group-hover:text-violet-600 " />
                  <div className="absolute left-[53%] top-5 text-xl transition-opacity duration-[2000ms] ease-out 
                    group-hover:ease-in opacity-0 text-gray-800 dark:text-gray-300 group-hover:opacity-100 lg:left-[53%] md:left-[53%]">
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
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 my-10 overflow-hidden md:h-96 md:w-96'>
              <Image src={santi} className="mt-2" layout="fill" objectFit="cover"/>
            </div>

          </section>

    {/* ------------------------------ SERVICES & TOOLS ------------------------------ */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white"> Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300"> 
              With a proactive, analytical, creative, professional with the capacity for planning, organization and team
              leadership; also with skills and criteria for decision making and <span className="text-teal-500">problem solving</span> labor problems, common
              sense, security and permanent dialogue <span className="text-teal-500">to meet the objectives</span> with different areas.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300"> 
              I am very interested in technology, very patient, meticulous and manage to seek efficiency in the emerging
              problems that are presented to us in the world of programming. I'm excited to share that I have completed Henry's course in Full Stack Web Development.
            </p>
          </div>
    {/* --------------------------------------- CARDS --------------------------------------- */}
          <div className="lg:flex gap-10">
            
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1" >
              <div className="flex justify-center">
                <Image claseName="flex justify-center" src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white"> Code your project</h3>
                <p className="py-2 dark:text-gray-300"> Do you have an idea for you next great website? Let's make it a reality</p>
              <h4 className="py-4 text-teal-600">Development knowledge</h4>
                <p className="text-gray-800 py-1 dark:text-gray-300">React, React-Native</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">NextJS, Tailwind</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">PostGres, MongoDB</p>
            </div>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700 flex-1" >
              <div className="flex justify-center">
                <Image claseName="flex justify-center" src={cpu} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white"> Connectivity and Security</h3>
                <p className="py-2 dark:text-gray-300"> Creating robust and secure IT infrastructure, networking, and security systems to meet your needs.</p>
              <h4 className="py-4 text-teal-600"> Implementations</h4>
                <p className="text-gray-800 py-1 dark:text-gray-300">Network & Hardware Setup</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">CCTV, Alarms & Security Sys.</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Fiber Optic Splicer & FTTH </p>
            </div>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className=" text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-700 flex-1" >
              <div className="flex justify-center">
                <Image claseName="flex justify-center" src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white"> Consulting</h3>
                <p className="py-2 dark:text-gray-300"> Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.</p>
              <h4 className="py-4 text-teal-600">Desing tools i use</h4>
                <p className="text-gray-800 py-1 dark:text-gray-300">Front-End, Web, UX/UI</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Back-End, Databases</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Home Servers, Datacenters</p>
            </div>
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          </div>
        </section>
    {/* ------------------------------ PROYECTS ------------------------------ */}
        <section >
          <div >
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300"> 
              It showcases my ability to build interactive interfaces with <span className="text-teal-500">React</span>, develop cross-platform mobile apps 
              using <span className="text-teal-500">React Native</span> , 
              efficiently manage databases with <span className="text-cyan-500">PostgreSQL</span>,
              and utilize <span className="text-cyan-500">MongoDB</span> for flexible NoSQL storage, 
              and write clean code with <span className="text-yellow-500">JavaScript</span>. With my Fullstack capabilities, I deliver comprehensive solutions across platforms.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap md:flex-col sm:flex-col">
        {/* ------------------------------ Eat Out ------------------------------ */}
          <div className="basis-1/3 flex-1">
              <div className=" flex flex-row justify-center gap-4">
                <a href="https://expo.dev/accounts/eatoutpf/projects/EatOut/builds/3d73abef-bb86-4afc-976f-352510fbd43f" 
                target="_blank" rel="noopener noreferrer">
                  <h2 className='
                    bg-gradient-to-r from-cyan-500 to-teal-500
                    text-white px-4 py-2 my-2 rounded-xl ml-8
                    hvr_pulse
                    transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30' 
                  >EatOut - Restaurant Reservations</h2> 
                </a>  
                <a href="https://github.com/EatOutPF/PF/tree/develop/FRONT/Native-2.0" 
                target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 group-hover:text-green-500" />
                </a>
              </div>
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <ImageCarousel keydiv="1" image={web_4_1}/>
                <ImageCarousel keydiv="2" image={web_4_2}/>
                <ImageCarousel keydiv="3" image={web_4_3}/>
                <ImageCarousel keydiv="4" image={web_4_4}/>
              </Carousel>
            </div> 
        {/* ------------------------------ Eat Out Dashboar ------------------------------ */}
            <div className="basis-1/3 flex-1">
              <div className=" flex flex-row justify-center gap-4">
                <a href="https://eatout-lac.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <h2 className='
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 my-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30' 
                  >Dashboard EatOut - Restaurant Admin </h2> 
                </a>
                <a href="https://github.com/EatOutPF/PF/tree/develop/FRONT/react-admin" 
                target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 group-hover:text-green-500" />
                </a>
              </div>
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <ImageCarousel keydiv="1" image={web_3_1}/>
                <ImageCarousel keydiv="2" image={web_3_2}/>
                <ImageCarousel keydiv="3" image={web_3_3}/>
              </Carousel>
            </div>
        {/* ------------------------------ PI Countries ------------------------------ */}            
            <div className="basis-1/3 flex-1">
              <div className=" flex flex-row justify-center gap-4">
                <a href="https://henry-pi-countries-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <h2 className='
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 my-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30' 
                  >Countries - Henry PI</h2>
                </a>
                <a href="https://github.com/SantiBavaresco/Henry-PI-Countries" 
                target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 group-hover:text-green-500" />
                </a>
              </div>
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <ImageCarousel keydiv="1" image={web_2_1}/>
                <ImageCarousel keydiv="2" image={web_2_2}/>
                <ImageCarousel keydiv="3" image={web_2_3}/>
                <ImageCarousel keydiv="4" image={web_2_4}/>
              </Carousel>
            </div>
        {/* ------------------------------ Rick & Morty ------------------------------ */}
            <div className="basis-1/3 flex-1">
              <div className=" flex flex-row justify-center gap-4">
                <a href="https://www.linkedin.com/posts/santiago-bavaresco_checkpoint-m2-frontend-activity-7006828658598285312-AWPK?utm_source=share&utm_medium=member_desktop" 
                  target="_blank" rel="noopener noreferrer">
                  <h2 className='
                      bg-gradient-to-r from-cyan-500 to-teal-500
                      text-white px-4 py-2 my-2 rounded-xl ml-8
                      hvr_pulse
                      transition duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-white/30' 
                  >Rick & Morty - Henry M2</h2>
                </a>
                <a href="https://github.com/SantiBavaresco/Rick-Morty" 
                target="_blank" rel="noopener noreferrer">
                  <AiFillGithub className="text-5xl pt-1 hvr_pulse text-gray-600 dark:text-gray-200 group-hover:text-green-500" />
                </a>
              </div>
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <ImageCarousel keydiv="1" image={web_1_1}/>
                <ImageCarousel keydiv="3" image={web_1_2}/>
                <ImageCarousel keydiv="4" image={web_1_3}/>
                
              </Carousel>
            </div>
            {/* <div className="basis-1/3 flex-1">
              <div className=" flex flex-row justify-center">
                <h2 className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">News Web - Cards</h2>
              </div>
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <ImageCarousel keydiv="1" image={web1}/>
                <ImageCarousel keydiv="2" image={web6}/>
                <ImageCarousel keydiv="3" image={web2}/>
                <ImageCarousel keydiv="4" image={web3}/>
              </Carousel>
            </div> */}
          </div>
        </section>

    {/* ------------------------------ BACKGROUND ------------------------------ */}
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white"> My Background</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300"> 
              I am a husband, father of a little boy, very good friend, and a passionate developer who is always 
              looking for new challenges and opportunities to grow.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300"> 
            As a FullStack Developer, I specialize in Back End development and have a strong passion for 
            solving complex challenges and implementing logical solutions. However, I am also highly skilled in Front End development, 
            where I enjoy improving the user experience (UX) by creating visually appealing and intuitive interfaces.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300"> 
            I am proficient in a range of technologies such as Javascript, React, React Native, Redux, Express,
            Postgress Sql, Sequelize, MongoDB, and Mongoose, with plans to expand my knowledge in TypeScript, NextJs,
              AWS, Firebase, and Google services.
            </p>
          </div>
  

    <div className="">
            
            {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-700" >
              <div className="flex justify-center">
                <Image claseName="flex justify-center" src={santi1} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-4 pb-2 dark:text-white"> My Background</h3>
                <p className="py-2 dark:text-gray-300"> Creating elegant desing suited fpr yput client</p>
              <h4 className="py-4 text-teal-600">Desing tools i use</h4>
                <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Ilustrator</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
            </div>

          </div>
                  



          
    













        </section>


        </main>
      </div>



    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.js</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Do00000cs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
