function setBackground(background){
    document.body.style.background=background
  }

function setElementByIdCursor(cursor,elementId){
    document.getElementById(elementId).style.cursor=cursor
  }
  function addElementByIdClass(className,elementId){
    document.getElementById(elementId).classList.add(className)
  }

  function removeElementByIdClass(className,elementId){
    document.getElementById(elementId).classList.remove(className)
  }

  function setElementByIdSrc(src,elementId){
      document.getElementById(elementId).src=src
  }

  function setElementByIdDisplay(display,elementId){
      document.getElementById(elementId).style.display=display
  }

function setBackgroundByMode(mode){
    if(mode === 'light') setBackground('linear-gradient(0deg, rgba(255,252,71,1) 0%, rgba(237,122,29,1) 57%)')
    else setBackground('linear-gradient(0deg, rgba(10,54,103,1) 0%, rgba(116,66,121,1) 57%)')
}  
