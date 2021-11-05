let button
const setButton = (buttonId)=> button = getElementById(buttonId)
const degreChanges = (buttonId)=>{
    setButton(buttonId)
    window.requestAnimationFrame(changeDegree);
}

let previousTimeStamp;
const animationTime=2000 
let degree=60
let start;
const changeDegree=(timestamp)=> {
    if (!start) start=timestamp;
  
    const elapsed = timestamp - start;
  
    if (previousTimeStamp !== timestamp ){
        button.style.background=`linear-gradient(#fff,#fff) content-box, linear-gradient(${degree}deg, rgba(17,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(91,24,199,1) 78%) border-box` ;
    }
    if (elapsed < animationTime){
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(changeDegree);
    }else{
         start=0
         previousTimeStamp=0
         degree=60
    }
    if(degree===360) degree=0;
    degree=degree+2
  }