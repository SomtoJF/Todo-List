let personalList = [];
let workList = [];
let schoolList = [];
let content = document.getElementById('content');
import {default as createNav} from './nav';


const createList = function (type){
    void function (){
        content.innerHTML = "";
        content.appendChild(createNav());
    }();

    void function createForm() {
        let form = document.createElement('form');
        return form;
    }();

    let addButton = () => {
        let button  = document.createElement('button');
        button.textContent = '+';
        button.addEventListener('click', () =>{
            if(createForm().style.display == 'block'){
                createForm().style.display = 'none'
            }
            else{
                createForm().style.display = 'block';
            };
        });
        content.appendChild(button);
    }
};
export default createList;