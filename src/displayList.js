import { personalList, schoolList, workList, listArrayString } from "./createForm";
import deleteImage from './deleteImage.png';

function displayList(listArray) {
    if(listArray == personalList){
        listArrayString = 'personalList';
    }
    else if(listArray == workList){
        listArrayString = 'workList';
    }
    else if(listArray == schoolList){
        listArrayString = 'schoolList';
    };
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    for(let i = 0; i < listArray.length; i++){
        let listItem = document.createElement('div');
        let infoDiv = document.createElement('div');
        infoDiv.textContent = `${listArray[i].title}: ${listArray[i].description}`;
        let deleteButton = document.createElement('button');
        deleteButton.style.backgroundImage = `url(${deleteImage})`;
        deleteButton.style.display = 'none';

        if(listArray[i].priority == 'High'){
            listItem.style.borderLeft = 'solid 5px red';
        }
        if(listArray[i].priority == 'Medium'){
            listItem.style.borderLeft = 'solid 5px orange';
        }
        if(listArray[i].priority == 'Low'){
            listItem.style.borderLeft = 'solid 5px Lime';
        }
        listItem.setAttribute('title', `Priority: ${listArray[i].priority}`);

        infoDiv.addEventListener('click', function(){
            if(listContainer.childNodes[i].style.height == '10vh'){
                listContainer.childNodes[i].style.height = '5vh';
                deleteButton.style.display = 'none';
            }
            else{
                listContainer.childNodes[i].style.height = '10vh';
                deleteButton.style.display = 'block';
            };
        });
        
        deleteButton.addEventListener('click', function (){
            if(listArray.length == 1){
                localStorage.removeItem(`${listArrayString}`);
            };
            listArray.splice(i, 1);
            displayList(listArray);
        });
        //append task information to task item
        listItem.appendChild(infoDiv);

        //append button to task information
        listItem.appendChild(deleteButton);

        //append task item to container
        listContainer.appendChild(listItem);

        //update local storage
        localStorage.setItem(`${listArrayString}`, JSON.stringify(listArray));
    };
};
export default displayList;