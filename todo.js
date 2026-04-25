let todoList=[{item:'buy Milk',dueDate:'2004-10-12'} ,{item: 'Go to college', dueDate: '2003-12-15'}];
displayItem();

function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let inputDate=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let todoDate=inputDate.value;
  todoList.push({item:todoItem,dueDate:todoDate});

  inputElement.value = '';
  displayItem();
}

function displayItem() {
  let containerElement=document.querySelector('.todo-container');

 let newHtml = '';
 for(let i=0; i < todoList.length;i++)
 {
  let {item, dueDate}=todoList[i];
  newHtml +=`
    <span>${item}</span>
     <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    displayItem();" >Delete</button>`;
 }
 containerElement.innerHTML=newHtml;
  
 }