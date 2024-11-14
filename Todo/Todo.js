
let todolist=[
    // {
    //     item:"buy a milk",
    //     date:"12/04/2024"
    // },
    // {
    //     item:"buy a charger",
    //     date:"12/04/2024"
    // },
    // {
    //     item:"buy a pen ",
    //     date:"12/04/2024"
    // },
];
display();
function addTodo(){
    let inputElement=document.querySelector("#todo-input");
    let dateElement=document.querySelector("#todo-date");
    let todoitem=inputElement.value;
    let todoDate=dateElement.value;
    todolist.push({item : todoitem,date : todoDate});
    inputElement.value='';
    display();
    
}

function display(){
    let containerElement=document.querySelector(".todo-container");
    let newhtml='';
    for(let i=0;i<todolist.length;i++){
        let {item,date}=todolist[i];
        newhtml+=`
        <span>${item}</span>
        <span>${date}</span>
        <button onclick="todolist.splice
        (${i},1); display();">Delete</button>
        `;
    }
    containerElement.innerHTML=newhtml;
}