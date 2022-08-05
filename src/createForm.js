import './createForm.css';
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
    let submitButton = document.createElement('button');
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
    description.setAttribute('placeholder', 'description');
    description.setAttribute('id', 'Description');
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

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(radioContainer);
    form.appendChild(submitButton);
    content.appendChild(form);

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
            alert(personalList.length);
        };
        if(listname == 'work'){
            workList[workList.length] = task(title.value, description.value, getRadioValue());
            alert(listname);
        };
        if(listname == 'school'){
            workList[workList.length] = task(title.value, description.value, getRadioValue());
            alert(listname);
        };
    }

    form.addEventListener('submit', function (e){
        addTaskToList(type);
        e.preventDefault();
        form.reset();
    })
    return form;
};
export default createForm;