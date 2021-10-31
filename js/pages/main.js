//replace with your user:
const GITHUB_URL = "https://api.github.com/users/nicki182";
fetch(GITHUB_URL)
  .then((response)=> {
    return response.json();
  })
  .then((data)=> {
    const profileImage=getElementById('profile-image')
    setElementByIdSrc(data.avatar_url,profileImage);
  });
  /*Initial variables*/
  let mode;
  let runningAnimation=false;
  const animationBackgroundChange=()=>{
        
    let mode=getMode();

    if(!runningAnimation){

      if(mode ==='light') setMode('dark');
  
      else setMode('light');
  }

    changeBackgroud(mode);

  }
  const changeBackgroud=(mode)=>{
    if(!runningAnimation) runAnimation(mode)
  }

  const runAnimation=(mode)=>{
    setRunningAnimation(true)
    setProfileImageCursor('auto');
    setModeFade(mode)
    window.requestAnimationFrame(fadeOut)
  }

  const finishAnimationFadeIn=()=>{
    setOriginalStateFadeIn()
    setRunningAnimation(false);
    setProfileImageCursor('pointer')
   }
  
   const finishAnimationFadeOut=()=>{
    setOriginalStateFadeOut(); 
    getMoreFramesFadeIn(0);
   }
  
    const fadeIn=(timestamp)=> {
  
      let start=getStart();
  
      const animationTime=getAnimationTime();
  
      if (!start){ 
        setStart(timestamp)
        start=getStart()
      }
  
      const elapsed = timestamp - start;
  
      if (isFadingInMore(timestamp)) setBackgroundToFadeInMore();
  
      if (elapsed < animationTime) getMoreFramesFadeIn(timestamp);
  
      else finishAnimationFadeIn();
      
      setNewOpacityIn();
  }
  
  const fadeOut=(timestamp)=> {

    let start=getStart();
  
    const animationTime=getAnimationTime();
  
    if (!start){ 
      setStart(timestamp)
      start=getStart()
    }
  
    const elapsed = timestamp - start;
  
    if (isFadingOutMore(timestamp)) setBackgroundToFadeOutMore();
  
    if (elapsed < animationTime) getMoreFramesFadeOut(timestamp);
  
    else finishAnimationFadeOut();
  
    setNewOpacityOut()
  }

  /*Animation initial values*/
  let start=0, previousTimeStamp=0,opacity=1;
  /*How much opacity is chaging by frame*/
  let opacityChangeBy=0.0050;
  /*Duration of animation*/
  let animationTime=5000;

  /*Seter functions*/

  const setProfileImageCursor=(cursor)=>{
    const profileImage=getElementById('profile-image')
    setElementByIdCursor(cursor,profileImage);
  }

  const setRunningAnimation=(run)=>{
    runningAnimation=run;
  }

  const setAnimationTime=(time)=>{
    animationTime=time
  }

  const setModeFade=(m)=>{
    mode=m
  }

  const setOpacityChangeBy=(opacity)=>{
    opacityChangeBy=opacity
  }

  const setPreviousTimeStamp=(prev)=>{
    previousTimeStamp=prev;
  }

  const setOpacity=(opa)=>{
    opacity=opa
  }

  const setStart=(st)=>{
    start=st
  }

  const setNewOpacityIn=()=>{

    const opacity=getOpacity();

    const opacityChangeBy=getOpacityChangeBy();

    const newOpacity=opacity+opacityChangeBy
  
    setOpacity(newOpacity)
  }

  const setNewOpacityOut=()=>{

    const opacity=getOpacity();

    const opacityChangeBy=getOpacityChangeBy();

    const newOpacity=opacity-opacityChangeBy
  
    setOpacity(newOpacity)
  }

  const setBackgroundToFadeInMore=()=>{
    /*Set background color with diferent opacity*/
    const opacity=getOpacity();
    setBackground(getBackgroudOpacity(mode==='dark'?'light':'dark',opacity))
  }

  const setBackgroundToFadeOutMore=()=>{
    /*Set background color with diferent opacity*/
    const opacity=getOpacity();
    setBackground(getBackgroudOpacity(mode,opacity))
  }

  const setOriginalStateFadeIn=()=>{
    setStart(0)
    setPreviousTimeStamp(0)
  }

  const setOriginalStateFadeOut=()=>{
    setStart(0)
    setPreviousTimeStamp(0)
  }

  /*Geter functions*/
  const getMoreFramesFadeOut=(timestamp)=>{
    setPreviousTimeStamp(timestamp)
    window.requestAnimationFrame(fadeOut);
  }

  const getMoreFramesFadeIn=(timestamp)=>{
    setPreviousTimeStamp(timestamp)
    window.requestAnimationFrame(fadeIn);
  }

  const getOpacity=()=>{
    return opacity
  }

  const getOpacityChangeBy=()=>{
    return opacityChangeBy
  }

  const getStart=()=>{
    return start 
  }

  const getAnimationTime=()=>{
    return animationTime
  }

  function getPreviousTimeStamp(){
    return previousTimeStamp
  }

 function getBackgroudOpacity(mode,opacity){
   if(mode === 'light') return  compile(lightModeColor,{opacity})
   return compile(darkModeColor,{opacity})
 }

 function isFadingInMore(timestamp){

   const previousTimeStamp=getPreviousTimeStamp();

   const opacity=getOpacity();

   return previousTimeStamp !== timestamp && opacity<1
 }

 function isFadingOutMore(timestamp){

  const previousTimeStamp=getPreviousTimeStamp();

  const opacity=getOpacity();

   return previousTimeStamp !== timestamp && opacity>0
 }

 