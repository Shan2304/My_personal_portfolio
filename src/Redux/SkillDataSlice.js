import { createSlice } from "@reduxjs/toolkit";
import pic_2 from "../Media/node.png";
import w_1_img from "../Media/weather_api/1.jpg";
import w_2_img from "../Media/weather_api/2.jpg";
import n_1_img from "../Media/tic tak toe/1.jpg";
import n_2_img from "../Media/tic tak toe/2.jpg";
import n_3_img from "../Media/tic tak toe/3.jpg";
import ns_1_img from "../Media/hospital-hub/1.jpg";
import ns_2_img from "../Media/hospital-hub/2.jpg";
import ns_3_img from "../Media/hospital-hub/3.jpg";
const initialState = {
  dataList: [
    { title: "Java", value: 95 },
    { title: "C++", value: 90 },
    { title: "JavaScript", value: 85 },
    { title: "SQL", value: 80 },
    { title: "HTML", value: 95 },
    { title: "CSS", value: 95 },
    { title: "Git", value: 90 },
    { title: "DSA", value: 85 },
  ],
  skillLearning: [
    {
      name: "Node.js",
      img: pic_2,
    },
    {
      name: "Express.js",
      img: "https://www.sohamkamani.com/nodejs/expressjs-architecture/express-routing-logo.png",
    },
    {
      name: "MongoDB",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
      // "https://assets.stickpng.com/images/58481021cef1014c0b5e494b.png",
    },
  ],
  experience: [
    
    {
      title: "Short term intership program",
      place: "National human rights commission,New Delhi",
      placeLink: "",
      duration: "08-may to 19-may 2023",
      desc: `Accomplish my short term internship in: various aspect of Human Right and Functioning of the commission how it work during the program
      SKILLS LEARN :about the human rights, social konwledge, how to government work ,how to police work ,etc... `,
    },
    {
      title: "Enginer Trainee",
      place: "Tata Technologies Limited, Pune",
      placeLink: "",
      duration: "jul 2022-Aug 2022",
      desc: `Accomplish my industrial Training in: Basics of Industrial Robotics, Product Design and development, Mechatronics and IoT, and Advanced Manufacturing.||
      SKILLS LEARN :Internet of Things (IoT) · Robotics · Manufacturing · Product Design · Mechatronics · 3D Modeling `,
    },

    {
      title: "Java Trainee",
      place: "Friends Union For Energising Lives (FUEL),Punjab",
      placeLink: "",
      duration: "jun 2022-feb 2022",
      desc: `one month Core JAVA and personality development training from Friends Union For Energising Lives (FUEL)!
      || SKILLS LEARN: Core Java · Personality Development `,
    },
    {
      title: "As React Full Stack Web Developer",
      place: "at Codehelp.com",
      placeLink: "https://www.thecodehelp.in/",
      duration: "November 2022 - Present",
      desc: `Learning Full Stack web development using React.js at code help with a 
      clear understanding of the usage of React Components, Redux working flow, fetching an API
      with asynchronous calls, manipulating HTML & CSS contents and properties by using DOM and
      Events concepts in JS, and having a good understanding on other ES6 concepts.
      <a href='https://www.linkedin.com/in/shantanu-kumar-kushwaha-437521204/'>Check out my Linkedin Profile(Click on me)</a>
      for the work I have done so far.`,
    },
    
    {
      title: "As Full Stack Web Developer",
      place: "Freelancing",
      placeLink: "https://www.unthinkable.co/",
      duration: "Duration depends upon Project",
      desc: `As of now I'm comfortable to make new projects related to Web-Development and also freelancing is the best way to start your development journey.`,
    },
  ],
  contact: [
    {
      title: "Call Me",
      link: "tel:+919956903652",
      icon: ["fa-solid", "fa-phone"],
    },
    {
      title: "Mail Me",
      link: "mailto:shan2022713@.com",
      icon: ["fa-solid", "fa-paper-plane"],
    },
    {
      title: "GitHub",
      link: "https://github.com/Shan2304",
      icon: ["fa-brands", "fa-square-github"],
    },
    {
      title: "Do Connect on LinkedIn",
      link: "https://www.linkedin.com/in/shantanu-kumar-kushwaha-437521204/",
      icon: ["fa-brands", "fa-linkedin"],
    },
  ],
  projects: [
    
    {
      title: "HEALTHLINE-HUB",
      responsive: "Yes",
      codeLink: "",
      deployed: "NO still working on this",
      deployedIn: "----",
      deployLink: "",
      images: [ns_1_img, ns_2_img, ns_3_img],
    },
    {
      title: "Weather-API",
      responsive: "Yes",
      codeLink: "https://github.com/Shan2304/weather-app",
      deployed: "Yes",
      /*deployedIn: "https://app.netlify.com/",*/
      deployLink: "shan2304.github.io/weather-app/",
      images: [w_1_img, w_2_img],
    },
    {
      title: "Tic Tac Toe",
      responsive: "Yes",
      codeLink: "https://github.com/Shan2304/Tic-Tak-Toe-game",
      deployed: "Yes",
      deployedIn: "---",
      deployLink: "shan2304.github.io/Tic-Tak-Toe-game/",
      images: [n_1_img, n_2_img, n_3_img],
    },
    
  ],
};

const skillData = createSlice({
  name: "skillData",
  initialState,
  reducers: {
    sendData: (state, action) => {
      state.dataList = action.payload;
    },
    sendLearningData: (state, action) => {
      state.skillLearning = action.payload;
    },
  },
});
export default skillData.reducer;
export const { sendData, sendLearningData } = skillData.actions;
