import './nav.css';

const createNav = function (){
    let nav = document.createElement('nav');

    let logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.innerHTML = '<h1>Oblige</h1>';
    
    
    nav.appendChild(logo);
    return nav;
};
export default createNav;