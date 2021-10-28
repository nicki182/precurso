function getMode(){
    return window.localStorage.getItem('mode')
}
function setMode(mode){
    window.localStorage.removeItem('mode')
    window.localStorage.setItem('mode',mode)
}