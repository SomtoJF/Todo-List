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

    function displayList(listname) {
        let listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';
        for(let i = 0; i < listname.length; i++){
            let listItem = document.createElement('div');
            let infoDiv = document.createElement('div');
            infoDiv.textContent = `${listname[i].title}: ${listname[i].description}`;

            if(listname[i].priority == 'High'){
                listItem.style.borderLeft = 'solid 5px red';
            }
            if(listname[i].priority == 'Medium'){
                listItem.style.borderLeft = 'solid 5px orange';
            }
            if(listname[i].priority == 'Low'){
                listItem.style.borderLeft = 'solid 5px Lime';
            }
            listItem.setAttribute('title', `Priority: ${listname[i].priority}`);

            infoDiv.addEventListener('click', function(){
                if(listContainer.childNodes[i].style.height == '10vh'){
                    listContainer.childNodes[i].style.height = '5vh';
                }
                else{
                    listContainer.childNodes[i].style.height = '10vh';
                };
            });
            infoDiv.addEventListener('dblclick', function (){
                listContainer.childNodes[i].style.textDecoration == 'line-through';
                listContainer.childNodes[i].style.color == 'grey';
                listname.splice(i, 1);
                displayList(listname);
            });
            //append task information to task item
            listItem.appendChild(infoDiv);

            //append task item to container
            listContainer.appendChild(listItem);
        };
    };

    form.addEventListener('submit', function (e){
        addTaskToList(type);
        e.preventDefault();
        form.reset();
    })
    return form;
};
export default createForm;