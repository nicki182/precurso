/*I'm very aware that you might think that I'm overcomplicating but to be honest what the assigment 
asked I already did it in a much simpler code (before receiving the assigment in another proyect) 
and I wanted to take the chance to make something that I would be able to use it in any form. 
Maybe it's too much for what is asked but I wanted to take the challange and see if I can do it 
and if it didn't work, which if you are reading this I manage to do it, 
then no harm done because I would reuse the other code I made and make some twaeks. 
*/
/*Fields is an arrray of fields for more information read fields file*/
var isValid=false;
var fields;
const fieldsContructor=(fieldsC)=>_.map(fieldsC,fieldContructor)

const setFields=(fieldsS)=>fields=fieldsContructor(fieldsS)

const validateField=()=>{
    
}

const createFields=(fieldsToValidate)=>{
    setFields(fieldsToValidate)
    _.forEach(fields,field=>{
    const elementsField=getElementsByName(field.name)
    _.forEach(elementsField,element=>setElementEventListener(element,"change",validateField))
    })
}




