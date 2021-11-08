const setBackground = (element, background) =>
  (element.style.background = background);

const setElementCursor = (cursor, element) => (element.style.cursor = cursor);

const addElementClass = (className, element) =>
  element.classList.add(className);

const removeElementClass = (className, element) =>
  element.classList.remove(className);

const setElementSrc = (src, element) => (element.src = src);

const setElementDisplay = (display, element) => (element.style.display = display);

const setColorModeByMode = (mode) => {
  if (mode === "light")
    setPropetyValue(
      "--modeColor",
      compile(lightModeColor, { opacity: 1, degree: 60 })
    );
  else
    setPropetyValue(
      "--modeColor",
      compile(darkModeColor, { opacity: 1, degree: 60 })
    );
};

const setElementInnerText = (element, innerText) =>
  (element.innerText = innerText);

const setPropetyValue = (property, value) =>
  document.documentElement.style.setProperty(property, value);

const setElementBorder = (element, border) => (element.style.border = border);

const getElementValue = (element) => element.value;

const setElementDisabled = (element, disabled) => (element.disabled = disabled);

const getElementsByName = (elementName) =>
  document.querySelectorAll(`[name="${elementName}"]`);

const getElementById = (elementId) => document.getElementById(elementId);

const setElementEventListener = (element, type, event) => element.addEventListener(type, event);

const setElementTop = (element, top) => (element.style.top = top);

const setElementRight = (element, right) => (element.style.right = right);

const setElementTransform = (element, transform) => element.style.transform = transform;

const setTextColorByMode = (mode) => {
  if (mode === "light") setPropetyValue("--textColor", compile(blackTextColor, { opacity: 1 }));
  else setPropetyValue("--textColor", compile(whiteTextColor, { opacity: 1 }));
};

const isElementDisabled = (element) => element.disabled;

const setContrastColorByMode = (mode) => {
  if (mode === "light")
    setPropetyValue(
      "--contrastColor",
      compile(contrastColorLightMode, { opacity: 1 })
    );
  else
    setPropetyValue(
      "--contrastColor",
      compile(contrastColorDarkMode, { opacity: 1 })
    );
};

const getElementsByAttrib = (attrib) => {
  return document.querySelectorAll("[" + attrib + "]");
}

const setElementID = (element, id) => (element.id = id);