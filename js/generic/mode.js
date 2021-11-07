const setChangesByMode = (mode) => {
  setColorModeByMode(mode);
  setTextColorByMode(mode);
  setContrastColorByMode(mode);
};

const getMode = () => {
  return getLocalStorage("mode");
};
const setMode = (mode) => {
  removeLocalStorage("mode");
  setLocalStorage("mode", mode);
};
