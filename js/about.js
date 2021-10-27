function moveNext2(){
    removeElementByIdClass('next2Initial','next_2')
    addElementByIdClass('next2Final','next_2')
}
var i=0;

const cities=['BUENOS_AIRES','AVENTURA','PARIS','PINSK']

const cityURL={
    BUENOS_AIRES:'https://maps.google.com/maps?q=ciudad%20de%20buenos%20aires&t=&z=11&ie=UTF8&iwloc=&output=embed',
    AVENTURA:"https://maps.google.com/maps?q=florida,aventura&t=&z=13&ie=UTF8&iwloc=&output=embed",
    PARIS:'https//maps.google.com/maps?q=PARIS,france&t=&z=13&ie=UTF8&iwloc=&output=embed',
    PINSK:"https://maps.google.com/maps?q=PINSK&t=&z=13&ie=UTF8&iwloc=&output=embed"
}

function moveNext3(){
    removeElementByIdClass('next3Initial','next_3')
    addElementByIdClass('next3Final','next_3')
}


function setCity(city){
    const url=_.get(cityURL,city,'')
    setElementByIdSrc(url,"gmap_canvas")
}

function takeOutNextButton(){
    setElementByIdDisplay('none','next_button')
}

function takeOutPreviousButton(){
    setElementByIdDisplay('none','previous_button')
}

function bringBackNextButton(){
    setElementByIdDisplay('block','next_button')
}

function bringBackPreviousButton(){
    setElementByIdDisplay('block','previous_button')
}

function nextCity(){
    i++;
    setCity(cities[i]);
    if(i===cities.length-1) takeOutNextButton()
    else if(i===1) bringBackPreviousButton()
}
function previousCity(){
    i--;
    setCity(cities[i]);
    if(i===0) takeOutPreviousButton()
    else if(i===cities.length-2) bringBackNextButton()
}