//replace with your user:
const GITHUB_URL = "https://api.github.com/users/nicki182";
fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });

  /*Initial variables*/
  let mode;
  let runningAnimation=false;
  function animationBackgroundChange(){
        
    let mode=getMode();

    if(!runningAnimation){

      if(mode ==='light') setMode('dark');
  
      else setMode('light');
  }

    changeBackgroud(mode);

  }
  function changeBackgroud(mode){
    if(!runningAnimation) runAnimation(mode)
  }

  function runAnimation(mode){
    setRunningAnimation(true)
    setProfileImageCursor('auto');
    setModeFade(mode)
    window.requestAnimationFrame(fadeOut)
  }

  function finishAnimationFadeIn(){
    setOriginalStateFadeIn()
    setRunningAnimation(false);
    setProfileImageCursor('pointer')
   }
  
   function finishAnimationFadeOut(){
    setOriginalStateFadeOut(); 
    getMoreFramesFadeIn(0);
   }
  
    function fadeIn(timestamp) {
  
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
  
  function fadeOut(timestamp) {
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

  function setProfileImageCursor(cursor){
    setElementByIdCursor(cursor,'profile-image');
  }

  function setRunningAnimation(run){
    runningAnimation=run;
  }

  function setAnimationTime(time){
    animationTime=time
  }

  function setModeFade(m){
    mode=m
  }

  function setOpacityChangeBy(opacity){
    opacityChangeBy=opacity
  }

  function setPreviousTimeStamp(prev){
    previousTimeStamp=prev;
  }

  function setOpacity(opa){
    opacity=opa
  }

  function setStart(st){
    start=st
  }

  function setPreviousTimeStamp(prev){
    previousTimeStamp=prev;
  }

  function setStart(st){
    start=st
  }

  function setNewOpacityIn(){

    const opacity=getOpacity();

    const opacityChangeBy=getOpacityChangeBy();

    const newOpacity=opacity+opacityChangeBy
  
    setOpacity(newOpacity)
  }

  function setNewOpacityOut(){

    const opacity=getOpacity();

    const opacityChangeBy=getOpacityChangeBy();

    const newOpacity=opacity-opacityChangeBy
  
    setOpacity(newOpacity)
  }

  function setBackground(background){
    document.body.style.background=background
  }

  function setBackgroundToFadeInMore(){
    /*Set background color with diferent opacity*/
    const opacity=getOpacity();
    setBackground(getBackgroudOpacity(mode==='dark'?'light':'dark',opacity))
  }

  function setBackgroundToFadeOutMore(){
    /*Set background color with diferent opacity*/
    const opacity=getOpacity();
    setBackground(getBackgroudOpacity(mode,opacity))
  }

  function setOriginalStateFadeIn(){
    setStart(0)
    setPreviousTimeStamp(0)
  }

  function setOriginalStateFadeOut(){
    setStart(0)
    setPreviousTimeStamp(0)
  }

  /*Geter functions*/
  function getMoreFramesFadeOut(timestamp){
    setPreviousTimeStamp(timestamp)
    window.requestAnimationFrame(fadeOut);
  }

  function getMoreFramesFadeIn(timestamp){
    setPreviousTimeStamp(timestamp)
    window.requestAnimationFrame(fadeIn);
  }

  function getOpacity(){
    return opacity
  }

  function getOpacityChangeBy(){
    return opacityChangeBy
  }

  function getStart(){
    return start 
  }

  function getAnimationTime(){
    return animationTime
  }

  function getPreviousTimeStamp(){
    return previousTimeStamp
  }

 function getBackgroudOpacity(mode,opacity){
   if(mode === 'light') return  `linear-gradient(0deg, rgba(255,252,71,${opacity}) 0%, rgba(237,122,29,${opacity}) 57%)`
   return `linear-gradient(0deg, rgba(10,54,103,${opacity}) 0%, rgba(116,66,121,${opacity}) 57%)`
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

 