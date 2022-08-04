import './todoType.css';
import {default as createList} from './listCreator';

const todoType = function () {
    let type = 'Personal Work School'.split(' ');
    let container = document.createElement('div');
    container.setAttribute('id', 'typeContainer');
    for(let i = 0; i < type.length; i++){
        let typeButton = document.createElement('button');
        typeButton.textContent = type[i];
        if(i == 0){
            typeButton.addEventListener('click', ()=>{
                createList('personal');
            })
        }
        container.appendChild(typeButton);
    };
    return container;
};
export default todoType;