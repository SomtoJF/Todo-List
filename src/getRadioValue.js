function getRadioValue(radioNameAsString){
    let Name = document.getElementsByName(radioNameAsString);
    for(let i = 0; i < Name.length; i++){
        if(Name[i].checked && i == 0){
            return 'High';
        }
        else if(Name[i].checked && i == 1){
            return 'Medium';
        }
        else if(Name[i].checked && i == 2){
            return 'Low';
        };
    };
};
export default getRadioValue;