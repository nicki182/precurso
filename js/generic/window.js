const onWindowScroll = (onScroll) => {
  window.addEventListener("scroll", () => {
    console.log("onWindowScroll");
    onScroll(window.scrollX, window.scrollY);
  });
};
const onWindowResize = (onResize) => {
  window.addEventListener("resize", () => {
    onResize(window.innerWidth, window.innerHeight);
  });
};

const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

const requestAnimationFrame = (callback) => {
  window.requestAnimationFrame(callback);
};
