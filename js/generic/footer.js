let text = "This page has been made with";

_.forEach(lenguages, (leng, index) => {
  if (index === _.size(lenguages) - 1) text = text + ` and ${labelLeguages[leng]}`;
  else if (index === 0) text = text + ` ${labelLeguages[leng]}`;
  else text = text + ` , ${labelLeguages[leng]}`;
});

const elementFooter = getElementById("footerText");

setElementInnerText(elementFooter, text);