function task (title, description, priority, dateDue){
    const dateCreated = new Date();
    dateDue = new Date(dateDue);
    return {title, description, priority, dateCreated, dateDue};
};
export default task;