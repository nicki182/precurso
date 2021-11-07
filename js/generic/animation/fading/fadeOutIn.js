let onEndingIntialValue;
const setOnEndingInitialValue = (value) => (onEndingIntialValue = value);
const fadeOutIn = () => {
  setOnEndingInitialValue(getOnEndingAnimation());
  startAnimation(startFadeIn, "fadeOut");
};
const startFadeIn = () => {
  startAnimation(onEndingIntialValue, "fadeIn");
};
