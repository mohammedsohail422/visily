import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./comp/Hero";
import Mul from "./comp/Mul";

import vid1 from "../images/lofi+to+hifi+fast.webm";
import vid2 from "../images/templates.webm";
import vid3 from "../images/screenshot_to_design.2.webm";
import vid4 from "../images/Feature_prototype.mp4";
import vid5 from "../images/Collaborate+(Website+2022).webm";
import vid6 from "../images/code.webm";

import "./Home.css";
import Partner from "./comp/Partner";
import Banner from "./comp/Banner";
import Footer from "../Components/Footer";

const Home = () => {
  const data = [
    {
      heading: "Accelerate wireframes creation",
      sub: "Easily create MVP-ready wireframes for rapid feedback and iteration - no design skills needed. Pitching stakeholders with Visily is as easy as using Google Slides.",
      vid: vid1,
      coloring: "c-one",
    },
    {
      heading: "Tons of beautiful templates",
      sub: "Upload any existing app images or hand-drawn sketches and let Visily convert them into fully customizable wireframes.",
      vid: vid2,
      coloring: "c-two",
    },
    {
      heading: "Design with AI",
      sub: "Upload any existing app images or hand-drawn sketches and let Visily convert them into fully customizable wireframes.",
      vid: vid3,
      coloring: "c-three",
    },
    {
      heading: "Interactivity",
      sub: "Connect screens and components to visualize application flows and demonstrate them to others.",
      vid: vid4,
      coloring: "c-four",
    },
    {
      heading: "Built for fast-moving teams",
      sub: "Move fast and collaborate with your whole team in real-time to create the best UI for your users.",
      vid: vid5,
      coloring: "c-three",
    },
    {
      heading: "Speed up UI coding",
      sub: "Code app UI faster with Visily’s CSS code inspector.",
      vid: vid6,
      coloring: "c-five",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <Mul dynamic={data[0]} />
      <Mul dynamic={data[1]} />
      <Mul dynamic={data[2]} />
      <Mul dynamic={data[3]} />
      <Mul dynamic={data[4]} />
      <Mul dynamic={data[5]} />
      <Partner />
      <Banner />
      <Footer />
    </>
  );
};

export default Home;
