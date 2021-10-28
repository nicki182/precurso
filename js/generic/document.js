const lightModeColor='linear-gradient(0deg, rgba(255,252,71,${opacity}) 0%, rgba(237,122,29,${opacity}) 57%)'
const darkModeColor='linear-gradient(0deg, rgba(10,54,103,${opacity}) 0%, rgba(116,66,121,${opacity}) 57%)'

const setBackground=(background)=>{
    document.body.style.background=background
  }

const setElementByIdCursor=(cursor,elementId)=>{
    document.getElementById(elementId).style.cursor=cursor
  }
const addElementByIdClass=(className,elementId)=>{
    document.getElementById(elementId).classList.add(className)
  }

const removeElementByIdClass=(className,elementId)=>{
    document.getElementById(elementId).classList.remove(className)
  }

const setElementByIdSrc=(src,elementId)=>{
      document.getElementById(elementId).src=src
  }

const setElementByIdDisplay=(display,elementId)=>{
      document.getElementById(elementId).style.display=display
  }

const setBackgroundByMode=(mode)=>{
    if(mode === 'light') setBackground(compile(lightModeColor,{opacity:1}))
    else setBackground(compile(darkModeColor,{opacity:1}))
}  

const setElementByIdInnerText=(elementId,innerText)=>{
  document.getElementById(elementId).innerText=innerText
}

const setPropetyValue=(property,value)=>{
  document.documentElement.style.setProperty(property,value)
}