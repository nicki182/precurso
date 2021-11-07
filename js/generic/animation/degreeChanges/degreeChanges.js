let button;
let degree = 60;
let initialDegree;
const setButton = (b) => (button = b);
const setDegree = (deg) => (degree = deg);
const getDegree = () => degree;

const setNewDegree = () => {
  const degree = getDegree();
  
  if (degree === 360) setDegree(0);
  
  setDegree(degree + 2);
};

const finishAnimationDegreeChanges = () => {
  finishAnimation();
  
  setDegree(60);
};

const getBackgroudDegree = (mode, d) => {
  if (mode === "light")
    return compile(lightModeColor, { opacity: 1, degree: d });
  return compile(darkModeColor, { opacity: 1, degree: d });
};

const setButtonToChangeDegreeMore = () => {
  const degree = getDegree();
  const mode = getMode();
  const extraParams = getExtraParams();
  const button = _.get(extraParams, "buttonId", null)
    ? getElementById(_.get(extraParams, "buttonId", null))
    : getElementsByName("button")[0];
  setBackground(button, getBackgroudDegree(mode, degree));
};

const changeDegree = (timestamp) => {
  let start = getStart();

  const animationTime = getAnimationTime();

  if (!start) {
    setStart(timestamp);
    start = getStart();
  }

  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) setButtonToChangeDegreeMore();

  if (elapsed < animationTime) continueAnimation(timestamp);
  else finishAnimationDegreeChanges();

  setNewDegree();
};
