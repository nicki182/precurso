const errorColor=''
function validateInput(elementIdInput,elementIdError){  
    if(document.getElementById(elementId).value===''){
            showRequired(elementIdError,elementIdInput);
    }else{
        validate();
        hideRequired(elementIdError,elementIdInput);
    }
}

function showRequired(elementIdError,elementIdInput){
    document.getElementById(elementIdError).innerText='Required';
    document.getElementById(elementIdInput).style.border='#9A0033 solid 2px';
}
function hideRequired(elementIdError,elementIdInput){
    document.getElementById(elementIdError).innerText='';
    document.getElementById(elementIdInput).style.border='none';
}
function validateCheckBoxRadio(){
    validate();
}
function validate(){
//Check if within the form there is an element that is not completed
      
      if (radioButtons.some(radioButton=>radioButton.checked===true) && inputs.some(input=>input.value!=="") && textAreas.some(textArea=>textArea.value!=="") && checkBoxes.some(checkBox=>checkBox.checked===true) ) {  
          document.getElementsByTagName("button")
      }
}
function onSubmit(){
    console.log('success');
}
