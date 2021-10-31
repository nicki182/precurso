var inputs;

var checkBoxes;

var isValid=false;

const setCheckboxesFields=(checkBoxesForm)=>checkBoxes=checkBoxesForm

const setInputsFields=(inputsForm)=>inputs=inputsForm

const getIsValid=()=>isValid

const setIsValid=(isValidForm)=>isValid=isValidForm

const validateInput=(input)=>{ 

    if(!isValidInputField(input)) showRequired(elementIdError,elementIdInput);

    else hideRequired(elementIdError,elementIdInput);
}

const validateCheckbox=()=> validate()

const showRequired=(elementIdError,elementIdInput)=>{
    setElementByIdInnerText(elementIdError,'Required')

    setElementByIdBorder(elementIdInput,`${errorColor} 2px solid`);
}
const hideRequired=(elementIdError,elementIdInput)=>{
    setElementByIdInnerText(elementIdError,'')

    setElementByIdBorder(elementIdInput,'none');
}

const isValidCheckboxesField=(checkBoxes)=>_.some(checkBoxes,{checked:true})

const isValidInputField=(input)=>input.value!==''

const validate=()=>{
   if(_.all(inputs,isValidInputField) && _.all(checkBoxes,isValidCheckboxesField)) setIsValid(true)
   else isValid(false)
}
