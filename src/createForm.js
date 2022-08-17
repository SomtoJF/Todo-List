import './createForm.css';
import {default as storageAvailable} from './localStorage';
let personalList = [];
let workList = [];
let schoolList = [];
let listArrayString;
import deleteImage from './deleteImage.png';

function createForm(type) {
    let form = document.createElement('form');
    form.setAttribute('id', 'form');
    form.style.display = 'none';
    let title = document.createElement('input')
    let description = document.createElement('textarea');
    let radioContainer = document.createElement('fieldset');
    let legend  = document.createElement('legend');
    let submitButton = document.createElement('button');

    let closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeButton');
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
    appendToForm(closeButton, title, description, radioContainer, submitButton);

    function task (title, description, priority){
        return {title, description, priority};
    };

    function getRadioValue(){
        let listPriorities = document.getElementsByName('listPriorities');
        for(let i = 0; i < listPriorities.length; i++){
            if(listPriorities[i].checked && i == 0){
                return 'High';
            }
            else if(listPriorities[i].checked && i == 1){
                return 'Medium';
            }
            else if(listPriorities[i].checked && i == 2){
                return 'Low';
            };
        };
    };

    function addTaskToList(listname){
        if(listname == 'personal'){
            personalList[personalList.length] = task(title.value, description.value, getRadioValue());
            displayList(personalList);
        };
        if(listname == 'work'){
            workList[workList.length] = task(title.value, description.value, getRadioValue());
            displayList(workList);
        };
        if(listname == 'school'){
            schoolList[schoolList.length] = task(title.value, description.value, getRadioValue());
            displayList(schoolList);
        };
    };

    function displayList(listArray) {
        if(listArray == personalList){
            listArrayString = 'personalList';
        }
        else if(listArray == workList){
            listArrayString = 'workList';
        }
        else if(listArray == schoolList){
            listArrayString = 'schoolList';
        };
        let listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';
        for(let i = 0; i < listArray.length; i++){
            let listItem = document.createElement('div');
            let infoDiv = document.createElement('div');
            infoDiv.textContent = `${listArray[i].title}: ${listArray[i].description}`;
            let deleteButton = document.createElement('button');
            deleteButton.style.backgroundImage = `url(${deleteImage})`;
            deleteButton.style.display = 'none';

            if(listArray[i].priority == 'High'){
                listItem.style.borderLeft = 'solid 5px red';
            }
            if(listArray[i].priority == 'Medium'){
                listItem.style.borderLeft = 'solid 5px orange';
            }
            if(listArray[i].priority == 'Low'){
                listItem.style.borderLeft = 'solid 5px Lime';
            }
            listItem.setAttribute('title', `Priority: ${listArray[i].priority}`);

            infoDiv.addEventListener('click', function(){
                if(listContainer.childNodes[i].style.height == '10vh'){
                    listContainer.childNodes[i].style.height = '5vh';
                    deleteButton.style.display = 'none';
                }
                else{
                    listContainer.childNodes[i].style.height = '10vh';
                    deleteButton.style.display = 'block';
                };
            });
            
            deleteButton.addEventListener('click', function (){
                if(listArray.length == 1){
                    localStorage.removeItem(`${listArrayString}`);
                };
                listArray.splice(i, 1);
                displayList(listArray);
            });
            //append task information to task item
            listItem.appendChild(infoDiv);

            //append button to task information
            listItem.appendChild(deleteButton);

            //append task item to container
            listContainer.appendChild(listItem);

            //update local storage
            localStorage.setItem(`${listArrayString}`, JSON.stringify(listArray));
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
    })
    return form;
};
export default createForm;