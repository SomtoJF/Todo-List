let personalList = [];
let workList = [];
let schoolList = [];
let content = document.getElementById('content');
import {default as createNav} from './nav';

let formatScreen = () =>{
    content.innerHTML = "";
    content.appendChild(createNav);
};
export {formatScreen};