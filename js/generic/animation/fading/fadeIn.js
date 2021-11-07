let opacityIn = 0;
/*Seter funtions*/
const setOpacityIn = (opa) => {
  opacityIn = opa;
};

/*Geter functions*/
const getOpacityIn = () => {
  return opacityIn;
};
const isFadingInMore = (timestamp) => {
  const previousTimeStamp = getPreviousTimeStamp();

  const opacity = getOpacityIn();

  return previousTimeStamp !== timestamp && opacity < 1;
};

const setNewOpacityIn = () => {
  const opacity = getOpacityIn();

  const opacityChangeBy = getOpacityChangeBy();

  const newOpacity = opacity + opacityChangeBy;

  setOpacityIn(newOpacity);
};
const setPageToFadeInMore = () => {
  /*Set background color with diferent opacity*/
  const opacity = getOpacityIn();
  const mode = getMode();
  const modeToSet = mode === "light" ? "dark" : "light";
  setPropetyValue("--modeColor", getBackgroudOpacity(modeToSet, opacity));
  setPropetyValue("--textColor", getColorOpacity(modeToSet, opacity));
  setPropetyValue("--contrastColor", getColorOpacity(modeToSet, opacity));
};

const finishAnimationFadeIn = () => {
  finishAnimation();
  
  setOpacityIn(0);
};

/*Animation*/

const fadeIn = (timestamp) => {
  let start = getStart();

  const animationTime = getAnimationTime();

  if (!start) {
    setStart(timestamp);
    start = getStart();
  }

  const elapsed = timestamp - start;

  if (isFadingInMore(timestamp)) setPageToFadeInMore();

  if (elapsed < animationTime) continueAnimation(timestamp);
  else finishAnimationFadeIn();

  setNewOpacityIn();
};
