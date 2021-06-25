let data = [{
    id: 1,
    title: "Estudar HTML"
}, {
    id: 2,
    title: "Estudas CSS"
}, {
    id: 3,
    title: "Estudar JavaScript"
}, {
    id: 4,
    title: "Estudar PHP 7"
}];

function renderTodo(){

    document.querySelector('.todo').innerHTML = '';

    data.forEach(task =>{
        let li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" id="task-${task.id}">
        <label for="task-${task.id}">${task.title}</label>    
        `;
    
        li.querySelector('input').addEventListener("change", e =>{
            if (e.target.checked){
                li.classList.add('complete');
            }else {
                li.classList.remove('complete');
            }
        });
    
        document.querySelector('.todo').append(li);
    });
}

document.querySelector('#new-task').addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        data.push({
            id: data.length+1,
            title: e.target.value
        });
        e.target.value = "";
        renderTodo();
    }
});

renderTodo();