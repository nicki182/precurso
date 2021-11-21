let i = 0;
const citiesILived = ["AVENTURA"];

const cityILive ="BUENOS_AIRES";

const citiesIWishToVisit = ["PARIS", "PINSK"];

const cityILivedText = "The city I have lived...";

const cityILiveText = "The city I live...";

const cityIWishToVisitText = "The city I wish to visit...";

const moveNext2 = () => {
  const elementNext2 = getElementById("next_2");
  removeElementClass("next2Initial", elementNext2);
  addElementClass("next2Final", elementNext2);
};

const moveNext3 = () => {
  const elementNext3 = getElementById("next_3");
  removeElementClass("next3Initial", elementNext3);
  addElementClass("next3Final", elementNext3);
};

const setCity = (city) => {
  const url = _.get(cityURL, city, "");
  const maps = getElementById("maps");
  const cityTitle = getElementById("cityTitle");
  
  setElementSrc(url, maps);

  if (_.includes(citiesILived, city)) setElementInnerText(cityTitle, cityILivedText);
  else if(_.includes(citiesIWishToVisit,city)) setElementInnerText(cityTitle, cityIWishToVisitText);
  else setElementInnerText(cityTitle, cityILiveText); 
}; 

const takeOutNextButton = () => {
  const nextButton = getElementById("next_button");
  setElementDisplay("none", nextButton);
};

const takeOutPreviousButton = () => {
  const prevButton = getElementById("previous_button");
  setElementDisplay("none", prevButton);
};

const bringBackNextButton = () => {
  const nextButton = getElementById("next_button");
  setElementDisplay("block", nextButton);
};

const bringBackPreviousButton = () => {
  const prevButton = getElementById("previous_button");
  setElementDisplay("block", prevButton);
};

const nextCity = () => {
  i++;
  setCity(cities[i]);
  if (i === cities.length - 1) takeOutNextButton();
  else if (i === 1) bringBackPreviousButton();
};
const previousCity = () => {
  i--;
  setCity(cities[i]);
  if (i === 0) takeOutPreviousButton();
  else if (i === cities.length - 2) bringBackNextButton();
};

const buttonNextDegreeChanges = () => degreChanges("next_button");

const buttonPreviousDegreeChanges = () => degreChanges("previous_button");
