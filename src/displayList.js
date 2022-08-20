import { personalList, schoolList, workList } from "./createForm";
import { formatRelative } from "date-fns";
import './displayList.css';
let listArrayString;

function arrayNameToString(arrayName){
    if(arrayName == personalList){
        listArrayString = 'personalList';
    }
    else if(arrayName == workList){
        listArrayString = 'workList';
    }
    else if(arrayName == schoolList){
        listArrayString = 'schoolList';
    };
};

function displayList(listArray) {
    arrayNameToString(listArray);

    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    for(let i = 0; i < listArray.length; i++){
        let listItem = document.createElement('div');

        let infoDiv = document.createElement('div');
        infoDiv.textContent = `${listArray[i].title}: ${listArray[i].description}`;
        if(listArray[i].priority == 'High'){
            infoDiv.style.borderLeft = 'solid 5px red';
        }
        if(listArray[i].priority == 'Medium'){
            infoDiv.style.borderLeft = 'solid 5px orange';
        }
        if(listArray[i].priority == 'Low'){
            infoDiv.style.borderLeft = 'solid 5px Lime';
        }
        listItem.setAttribute('title', `Priority: ${listArray[i].priority}`);

        infoDiv.addEventListener('click', function(){
            if(listContainer.childNodes[i].firstChild.style.height == '10vh'){
                listContainer.childNodes[i].firstChild.style.height = '5vh';
            }
            else{
                listContainer.childNodes[i].firstChild.style.height = '10vh';
            };
        });
        
        let deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', function (){
            if(listArray.length == 1){
                localStorage.removeItem(`${listArrayString}`);
            };
            listArray.splice(i, 1);
            displayList(listArray);
        });

        let timeContainer = document.createElement('div');
        timeContainer.innerHTML = `<small>Created ${relativeTime(Date.parse(listArray[i].dateCreated))}</small>`;
        timeContainer.innerHTML += `<small>Due ${relativeTime(Date.parse(listArray[i].dueDate))}</small>`;
        
        //append task information to task item
        listItem.appendChild(infoDiv);

        //append button to task information
        listItem.appendChild(deleteButton);
        
        // append Time Container
        listItem.appendChild(timeContainer);

        //append task item to container
        listContainer.appendChild(listItem);

        //update local storage
        localStorage.setItem(`${listArrayString}`, JSON.stringify(listArray));
    };
    
    function relativeTime(date){
        if(isNaN(date)){
            date = 0;
        }
        return formatRelative(date, new Date());
        // return formatRelative(date, new Date());
    };
};
export default displayList;