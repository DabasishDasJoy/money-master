function getInputFieldValueById(fieldid){
    const field = document.getElementById(fieldid);
    const fieldValueString = field.value;
    return parseFloat(fieldValueString);
}
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;

    return parseFloat(elementValueString);
}