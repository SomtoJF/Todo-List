import './todoType.css';

const todoType = function () {
    let type = 'Personal Work School'.split(' ');
    let container = document.createElement('div');
    container.setAttribute('id', 'typeContainer');
    for(let i = 0; i < type.length; i++){
        let typeButton = document.createElement('button');
        typeButton.textContent = type[i];
        container.appendChild(typeButton);
    };
    return container;
};
export default todoType;