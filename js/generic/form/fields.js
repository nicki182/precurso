/*
Field:
{
    name:nameOfField
    type:string | number | boolean
    validations:{
        required:boolean
        min:min
        max:max
        regex:regex
        boolean:boolean
    } 
}
*/

const fieldContructor=(field)=>{
    /*{
    name:nameOfField
    type:string | number | boolean
    validations:{
        required:{
            value:isFieldRequired,
            validator:requiredValidator
        } 
    ...
    } 
} */
    const validations = Object.fromEntries(
        Object.entries(field.validations).map(entry => [entry[0], {value:entry[1],validator:getValidation(entry[0],entry[1],field.type)}])
    );
    return {...field,isValid:false,validations}
}

const isEveryFieldValidated=(elements,field)=>{
    if(field.type === 'string' || field.type === 'number' ) return _.every(Object.values(field.validations),validation=>validation.validator(elements[0],validation.value))
    else return _.every(Object.values(field.validations),validation=>validation.validator(elements))
}