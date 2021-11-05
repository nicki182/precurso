const setChangesByMode=(mode)=>{
    setBackgroundByMode(mode);
    setColorByMode(mode);
    setContrastColorByMode(mode);
}

const getMode=()=>{
    return getLocalStorage('mode')
}
const setMode=(mode)=>{
    removeLocalStorage('mode');
    setLocalStorage('mode',mode)
}