/*Animation initial values*/
let start = 0,
  previousTimeStamp = 0,
  animationTime = 1250;
let animation = null;
/*When animation ends event*/
let onEnding;

let extraParams = null;
/*Animation functions*/

const startAnimation = (onEnding = () => {}, animationToDo, extraParams) => {
  setOnEndingAnimation(onEnding);

  setAnimation(animationToDo);

  setExtraParams(extraParams);

  const a = getAnimation();

  if (a) requestAnimationFrame(a);
};

const setExtraParams = (p) => {
  extraParams = p;
};

const continueAnimation = (timestamp) => {
  setPreviousTimeStamp(timestamp);
  requestAnimationFrame(animation);
};
/*Geter functions*/

const getAnimation = () => {
  return animation;
};

const getOnEndingAnimation = () => onEnding;

const getStart = () => {
  return start;
};

const getAnimationByName = (animationToDo) => {
  let a = null;
  switch (animationToDo) {
    case "fadeIn":
      a = fadeIn;
      break;
    case "fadeOut":
      a = fadeOut;
      break;
    case "fadeOutIn":
      a = fadeOutIn;
      break;
    case "degreeChanges":
      a = changeDegree;
      break;
  }
  return a;
};
const getAnimationTime = () => {
  return animationTime;
};

const getPreviousTimeStamp = () => {
  return previousTimeStamp;
};

const getExtraParams = () => {
  return extraParams;
};

/*Seter functions*/
const setAnimation = (animationToDo) => {
  animation = getAnimationByName(animationToDo);
};
const setOnEndingAnimation = (onEnd) => {
  onEnding = onEnd;
};

const setAnimationMode = (m) => {
  mode = m;
};

const setAnimationTime = (time) => {
  animationTime = time;
};
const setPreviousTimeStamp = (prev) => {
  previousTimeStamp = prev;
};

const setStart = (st) => {
  start = st;
};

const finishAnimation = () => {
  onEnding();
  setOriginalState();
};
const setOriginalState = () => {
  setStart(0);
  setPreviousTimeStamp(0);
};
