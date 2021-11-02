const setBackground=(background)=> document.body.style.background=background

const setElementCursor=(cursor,element)=> element.style.cursor=cursor

const addElementClass=(className,element)=> element.classList.add(className)

const removeElementClass=(className,element)=> element.classList.remove(className)

const setElementSrc=(src,element)=> element.src=src

const setElementDisplay=(display,element)=> element.style.display=display

const setBackgroundByMode=(mode)=>{
    if(mode === 'light') setBackground(compile(lightModeColor,{opacity:1}))
    else setBackground(compile(darkModeColor,{opacity:1}))
}  

const setElementInnerText=(element,innerText)=> element.innerText=innerText

const setPropetyValue=(property,value)=> document.documentElement.style.setProperty(property,value)

const setElementBorder=(element,border)=> element.style.border=border

const getElementValue=(element)=>element.value

const setElementDisabled=(element,disabled)=>element.disabled=disabled

const getElementsByName=(elementName)=>document.querySelectorAll(`[name="${elementName}"]`)

const getElementById=(elementId)=>document.getElementById(elementId)

const setElementEventListener=(element,type,event)=>element.addEventListener(type,event)

const setColorByMode=(mode)=>{
    if(mode === 'light') setPropetyValue('--textColor',compile(blackTextColor))
    else setPropetyValue('--textColor',compile(whiteTextColor,1))
}

const setContrastColorByMode=(mode)=>{
    if(mode === 'light') setPropetyValue('--contrastColor',compile(contrastColorLightMode))
    else setPropetyValue('--contrastColor',compile(contrastColorDarkMode,1))
}