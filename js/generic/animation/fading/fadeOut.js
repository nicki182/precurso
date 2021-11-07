let opacityOut = 1;
/*Seter funtions*/
const setOpacityOut = (opa) => {
  opacityOut = opa;
};

/*Geter functions*/
const getOpacityOut = () => {
  return opacityOut;
};

const isFadingOutMore = (timestamp) => {
  const previousTimeStamp = getPreviousTimeStamp();

  const opacity = getOpacityOut();

  return previousTimeStamp !== timestamp && opacity > 0;
};

const setNewOpacityOut = () => {
  const opacity = getOpacityOut();

  const opacityChangeBy = getOpacityChangeBy();

  const newOpacity = opacity - opacityChangeBy;

  setOpacityOut(newOpacity);
};

const setPageToFadeOutMore = () => {
  /*Set background color with diferent opacity*/
  const opacity = getOpacityOut();
  const mode = getMode();

  setPropetyValue("--modeColor", getBackgroudOpacity(mode, opacity));

  setPropetyValue("--textColor", getColorOpacity(mode, opacity));

  setPropetyValue("--contrastColor", getColorOpacity(mode, opacity));
};
const finishAnimationFadeOut = () => {
  finishAnimation();
  setOpacityOut(1);
};
/*Animation*/
const fadeOut = (timestamp) => {
  let start = getStart();

  const animationTime = getAnimationTime();

  if (!start) {
    setStart(timestamp);
    start = getStart();
  }

  const elapsed = timestamp - start;

  if (isFadingOutMore(timestamp)) setPageToFadeOutMore();

  if (elapsed < animationTime) continueAnimation(timestamp);
  else finishAnimationFadeOut();

  setNewOpacityOut();
};
