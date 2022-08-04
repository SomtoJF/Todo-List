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
    createForm();
};
export default createList;