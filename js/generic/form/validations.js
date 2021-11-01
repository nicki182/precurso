/*
Validation for each field:
    validation:{
        required:isFieldRequired
        min:minimumLegth | minimimumValue
        max:maximumLegth | maximumValue
        regex:regexForString
        boolean:booleanFieldValue
    } 
*/
var fieldsValidations;

const getRequiredValidationByType=(fieldType)=>{
    switch(fieldType){
        case "string":
            return requiredStringValidation
        case "number":
           return requiredNumberValidation 
        case "array":
            return requiredArrayValidation      
    }
}

const getMaxinumValidationByType=(fieldType)=>{
    switch(fieldType){
        case "string":
            return requiredStringValidation
        case "number":
           return requiredNumberValidation 
        case "array":
            return requiredArrayValidation      
    }
}

const getMinimumValidationByType=(fieldType)=>{
    switch(fieldType){
        case "string":
            return minimumStringValidation
        case "number":
           return minimumNumberValidation 
        case "array":
            return minimumArrayValidation      
    }
}

const getMaximumValidationByType=(fieldType)=>{
    switch(fieldType){
        case "string":
            return maximumStringValidation
        case "number":
           return maximumNumberValidation
        case "array":
            return maximumArrayValidation      
    }
}

const getValidation=(validation,value,fieldType)=>{
        switch(validation){
            case "required":
                if(value) return getRequiredValidationByType(fieldType)
            case "min":
                return getMinimumValidationByType(fieldType)
            case "regex":
                return regexValidation
            case "boolean":
                 return booleanValidation
            }    
}

/*Required validations*/
const requiredStringValidation=(input)=>input.value && input.value!==''

const requiredNumberValidation=(input)=>input.value && input.value!=='' && /^-?[0-9]*$/.test(input.value)

const requiredArrayValidation=(inputs)=>_.some(inputs,input=>(input.value && input.value!=='') || input.checked )

/*Min and Max validattions */

const minimumStringValidation=(input,min)=>_.size(input.value) > min 

const minimumNumberValidation=(input,min)=>input.value!=='' && _.toInteger(input.value)>min

const minimumArrayValidation=(inputs,min)=>_.size(_.filter(inputs,input=>(input.value && input.value!=='') || input.checked))>min

const maximumStringValidation=(input,max)=>_.size(input.value) < max 

const maximumNumberValidation=(input,max)=>input.value!=='' && _.toInteger(input.value)<max

const maximumArrayValidation=(inputs,max)=>_.size(_.filter(inputs,input=>(input.value && input.value!=='') || input.checked))<max

/*Regex*/
const regexValidation=(input,regex)=>regex.test(input.value)

/*boolean*/
const booleanValidation=(inputs)=>_.some(input,{checked:true})