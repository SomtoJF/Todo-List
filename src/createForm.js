function createForm() {
    let form = document.createElement('form');
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

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(radioContainer);
    form.appendChild(submitButton);
    content.appendChild(form);

    form.addEventListener('submit', function (e){
        e.preventDefault();
    })
    return form;
};
export default createForm;