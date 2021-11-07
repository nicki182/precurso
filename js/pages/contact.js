const onChangeContactForm = (isValid, field) => {
    const button = getElementById("submitContact");
    if (isValid) setElementDisabled(button, false);
    else setElementDisabled(button, true);
    //if(!field.isValid) addElementClass(elements[0],'required');
    //else removeElementClass(elements[0],'required');
};
const buttonSubmitDegreeChanges = () => {
    const submitButton = getElementById("submitContact");
    if (!isElementDisabled(submitButton)) startAnimation(_, "degreeChanges", { buttonId: "submitContact" });
};
setOnChange(onChangeContactForm);
createFields([
    {
        name: "inputName",
        type: "string",
        validations: {
            required: true,
        },
    },
    {
        name: "inputLastName",
        type: "string",
        validations: {
            required: true,
        },
    },
    {
        name: "comment",
        type: "string",
        validations: {
            required: true,
            max: 200,
        },
    },
    {
        name: "checkbox",
        type: "array",
        validations: {
            required: true,
        },
    },
]);
