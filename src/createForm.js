import './createForm.css';
import {default as storageAvailable} from './localStorage';
import {default as task} from './constructor';
import { default as getRadioValue } from "./getRadioValue";
import { default as displayList } from "./displayList";
let personalList = [];
let workList = [];
let schoolList = [];

function createForm(type) {
    let form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.style.display = 'none';
    let title = document.createElement('input')
    let description = document.createElement('textarea');
    let radioContainer = document.createElement('fieldset');
    let legend  = document.createElement('legend');
    let dueDate = document.createElement('input');
    let submitButton = document.createElement('button');

    let closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeButton');
    closeButton.setAttribute('type', 'button');
    closeButton.addEventListener('click', ()=> form.style.display = 'none');

    let radios = function(priority, name, type, id){
        return {priority, name, type, id}
    };
    let radioArray = [];
    radioArray[0] = radios('High', 'listPriorities', 'radio', 'High');
    radioArray[1] = radios('Medium', 'listPriorities', 'radio', 'Medium');
    radioArray[2] = radios('Low', 'listPriorities', 'radio', 'Low');

    legend.textContent = 'Priority';
    radioContainer.appendChild(legend);
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Task Title');
    title.setAttribute('id', 'title');
    title.setAttribute('required', '');
    title.setAttribute('maxlength', 50);
    title.setAttribute('title', 'Required, Maximum of 50 characters');
    description.setAttribute('placeholder', 'description');
    description.setAttribute('id', 'Description');
    description.setAttribute('maxlength', 120)
    description.setAttribute('title', 'Maximum of 120 characters')
    dueDate.setAttribute('type', 'datetime-local');
    dueDate.setAttribute('id', 'dueDate');
    dueDate.setAttribute('required', '');
    for(let i = 0; i < radioArray.length; i++){
        let radio = document.createElement('input');
        let label = document.createElement('label');
        label.textContent = radioArray[i].priority;
        label.setAttribute('for',radioArray[i].id);
        radio.setAttribute('required', '');
        radio.setAttribute('name', radioArray[i].name)
        radio.setAttribute('type', radioArray[i].type)
        radio.setAttribute('id', radioArray[i].id);
        radioContainer.appendChild(label);
        radioContainer.appendChild(radio);
    };
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('name', 'submit');
    submitButton.textContent = 'Add';

    const appendToForm  = function (){
        for(let i = 0; i < arguments.length; i++){
            form.appendChild(arguments[i]);
        };
        content.appendChild(form);
    };
    appendToForm(closeButton, title, description, dueDate,radioContainer, submitButton);

    function addTaskToList(listname){
        if(listname == 'personal'){
            personalList[personalList.length] = task(title.value, description.value, getRadioValue('listPriorities'));
            displayList(personalList);
        };
        if(listname == 'work'){
            workList[workList.length] = task(title.value, description.value, getRadioValue('listPriorities'));
            displayList(workList);
        };
        if(listname == 'school'){
            schoolList[schoolList.length] = task(title.value, description.value, getRadioValue('listPriorities'));
            displayList(schoolList);
        };
    };

    function DisplayAvailableTasks(listname){
        if (storageAvailable('localStorage') && localStorage.getItem('personalList')) {
            personalList = JSON.parse(localStorage.getItem('personalList'));
            if(listname === 'personal'){
                displayList(personalList);
           };
        };
        if (storageAvailable('localStorage') && localStorage.getItem('workList')) {
            workList = JSON.parse(localStorage.getItem('workList'));
            if(listname === 'work'){
                 displayList(workList);
            };
         };
        if (storageAvailable('localStorage') && localStorage.getItem('schoolList')) {
            schoolList = JSON.parse(localStorage.getItem('schoolList'));
            if(listname === 'school'){
                displayList(schoolList);
           };
        };
    };
    DisplayAvailableTasks(type);
    form.addEventListener('submit', function (e){
        addTaskToList(type);
        e.preventDefault();
        form.reset();
        form.style.display = 'none';
    })
    return form;
};
export default createForm;
export {personalList, workList, schoolList};