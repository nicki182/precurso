const getMode=()=>{
    return window.localStorage.getItem('mode')
}
const setMode=(mode)=>{
    window.localStorage.removeItem('mode')
    window.localStorage.setItem('mode',mode)
}