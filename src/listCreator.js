let personalList = [];
let workList = [];
let schoolList = [];
let content = document.getElementById('content');
import {default as createNav} from './nav';
import {default as createForm} from './createForm';

const clearContent = ()=>{
    content.innerHTML = "";
    content.appendChild(createNav());
};

const createList = function (type){
    clearContent();
    let form = createForm();
    let addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.addEventListener('click', function (){
        // let form = document.getElementById(form);
        if(form.style.display == 'none'){
            form.style.display = 'block';
        }else{
            form.style.display = 'none';
        };
    })
    content.appendChild(addButton);
};
export default createList;