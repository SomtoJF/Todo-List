function task (title, description, priority, dateDue){
    const dateCreated = new Date();
    return {title, description, priority, dateCreated, dateDue};
};
export default task;