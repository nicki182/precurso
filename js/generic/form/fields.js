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

const setIsValidField=(field,valid)=>({...field,isValid:valid})

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
        Object.entries(field).map(entry => [entry[0], {value:entry[1],validator:getValidation(entry[0],entry[1],field.type)}])
    );
    return {...field,isValid:false,validations}
}