let content = document.getElementById('content');
import {default as createNav} from './nav';
import {default as createForm} from './createForm';
import './listCreator.css';

const clearContent = ()=>{
    content.innerHTML = "";
    content.appendChild(createNav());
};

const createAddButton = (type)=>{
    let form = createForm(type);
    let addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.addEventListener('click', function (){
        if(form.style.display == 'none'){
            form.style.display = 'flex';
        }else{
            form.style.display = 'none';
        };
    })
    content.appendChild(addButton);
};

const createList = function (type){
    clearContent();
    createAddButton(type);
};
export default createList;