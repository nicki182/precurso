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
const cities = ["BUENOS_AIRES", "AVENTURA", "PARIS", "PINSK"];

const cityURL = {
  BUENOS_AIRES:
    "https://maps.google.com/maps?q=ciudad%20de%20buenos%20aires&t=&z=11&ie=UTF8&iwloc=&output=embed",
  AVENTURA:
    "https://maps.google.com/maps?q=florida,aventura&t=&z=13&ie=UTF8&iwloc=&output=embed",
  PARIS:
    "https//maps.google.com/maps?q=PARIS,france&t=&z=13&ie=UTF8&iwloc=&output=embed",
  PINSK:
    "https://maps.google.com/maps?q=PINSK&t=&z=13&ie=UTF8&iwloc=&output=embed",
};
