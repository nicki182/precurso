/*How much opacity is chaging by frame*/
let opacityChangeBy = 0.005;
/*Seter funtions*/
const setOpacityChangeBy = (opacity) => {
  opacityChangeBy = opacity;
};
/*Geter functions */
const getOpacityChangeBy = () => {
  return opacityChangeBy;
};
const getBackgroudOpacity = (mode, opacity) => {
  if (mode === "light") return compile(lightModeColor, { opacity, degree: 60 });
  return compile(darkModeColor, { opacity, degree: 60 });
};

const getColorOpacity = (mode, opacity) => {
  if (mode === "light") return compile(blackTextColor, { opacity });
  return compile(whiteTextColor, { opacity });
};

const getContrastColor = (mode, opacity) => {
  if (mode === "light") return compile(contrastColorLightMode, { opacity });
  return compile(contrastColorDarkMode, { opacity });
};
