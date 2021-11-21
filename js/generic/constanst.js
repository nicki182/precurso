/*Contasts for colors within the page that depending the mode*/
const lightModeColor = "linear-gradient(${degree}deg, rgba(235,235,235,${opacity}) 0%, rgba(222,209,18,${opacity}) 35%, rgba(245,132,52,${opacity}) 78%)";
const darkModeColor = "linear-gradient(${degree}deg, rgba(17,0,36,${opacity}) 0%, rgba(9,9,121,${opacity}) 35%, rgba(91,24,199,${opacity}) 78%)";

const blackTextColor = "rgba(21, 11, 32,${opacity})";
const whiteTextColor = "rgba(235, 235, 235,${opacity})";

const contrastColorDarkMode = "rgba(21, 11, 32,${opacity})";
const contrastColorLightMode = "rgba(235, 235, 235,${opacity})";

const errorColorLightMode = "#ffff";
const errorColorDarkMode = "#ffff";

/*Footer constast*/
const lenguages = ["HTML", "JAVASCRIPT", "CSS"];

const labelLeguages = {
  HTML: "HTML",
  JAVASCRIPT: "Javascript",
  CSS: "CSS",
};

/*Maps constast*/
const cities = [{code:"BUENOS_AIRES",url:'dasdsa',label:'Buenos Aires', neighoods:['Villla Ortuzzar','Belgrano']} , "AVENTURA", "PARIS", "PINSK"];

const cityURL = {
  BUENOS_AIRES:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.14267862897!2d-58.50334513436683!3d-34.61590023627066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1636324518565!5m2!1sen!2sar",
  AVENTURA:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28699.638222720987!2d-80.15443963634209!3d25.9531213472018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acf0b2276fd1%3A0x2b5cf9ea95a4b370!2sAventura%2C%20FL%2C%20USA!5e0!3m2!1sen!2sar!4v1636324744706!5m2!1sen!2sar",
  PARIS:
 "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95410647718!2d2.2769956978875374!3d48.858833639581015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sar!4v1636324810398!5m2!1sen!2sar",
  PINSK:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39187.72595962091!2d26.032872037513066!3d52.130085313921896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4727a1374eea7ead%3A0x14180b1bbb440aa1!2sPinsk%2C%20Belarus!5e0!3m2!1sen!2sar!4v1636324858149!5m2!1sen!2sar" ,
};
