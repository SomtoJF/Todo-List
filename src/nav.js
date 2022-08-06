import './nav.css';
import {default as todoType} from './todoType';
let content = document.getElementById('content');

const createNav = function (){
    let nav = document.createElement('nav');

    let logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.innerHTML = '<h1>Oblige</h1>';
    let menuOptionsDiv = document.createElement('div');
    let backButton = document.createElement('button');
    backButton.setAttribute('class', 'link');
    backButton.textContent = 'back';
    backButton.addEventListener('click', ()=>{
        content.innerHTML = '';
        content.appendChild(createNav());
        content.appendChild(todoType());
    });

    menuOptionsDiv.appendChild(backButton);
    nav.appendChild(logo);
    nav.appendChild(menuOptionsDiv);
    return nav;
};
export default createNav;