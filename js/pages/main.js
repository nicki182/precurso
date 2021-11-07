//replace with your user:
const GITHUB_URL = "https://api.github.com/users/nicki182";
fetch(GITHUB_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const profileImage = getElementById("profile-image");
    setElementSrc(data.avatar_url, profileImage);
  });
/*Initial variables*/
let mode;
let runningAnimation = false;
const animationBackgroundChange = () => {
  const mode = getMode();

  const isAnimationRunning = getRunningAnimation();

  if (!isAnimationRunning) {
    runAnimation();
  }
};

const runAnimation = () => {
  setRunningAnimation(true);
  setProfileImageCursor("auto");
  startAnimation(onFinish, "fadeOutIn");
};

const onFinish = () => {
  setRunningAnimation(false);

  setProfileImageCursor("pointer");

  const mode = getMode();

  if (mode === "light") setMode("dark");
  else setMode("light");
};
const getRunningAnimation = () => {
  return runningAnimation;
};
/*Seter functions*/

const setProfileImageCursor = (cursor) => {
  const profileImage = getElementById("profile-image");
  setElementCursor(cursor, profileImage);
};

const setRunningAnimation = (run) => {
  runningAnimation = run;
};
