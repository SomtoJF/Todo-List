function task (title, description, priority){
    const dateCreated = new Date();
    return {title, description, priority, dateCreated};
};
export default task;