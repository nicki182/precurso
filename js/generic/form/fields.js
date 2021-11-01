/*
Field:
{
    name:nameOfField
    type:string | number | boolean
    validations:{
        required:isFieldRequired
        min:minimumLegth | minimimumValue
        max:maximumLegth | maximumValue
        regex:regexForString
        boolean:booleanFieldValue
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
        Object.entries(field).map(entry => [entry[0], {value:entry[1],validator:getValidation(entry[0],entry[1],field.type)}])
    );
    return {...field,validations}
}