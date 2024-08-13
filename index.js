let todolist=[];

displaytodoitems();




function addbutton(){

  let inputelement=document.querySelector('.todo-input');
  let dateelement=document.querySelector('.todo-date');
  
  let todoelement= inputelement.value;
  let tododate=dateelement.value;

  console.log(todoelement);

  todolist.push({item:todoelement, duedate:tododate});
 
  console.log(todolist);
 
  inputelement.value="";
  dateelement.value="";

  displaytodoitems();

 


}



function displaytodoitems(){
   let  displayitems=document.querySelector('#todo-list-container');
 
   let newhtml='';

 
  for(let i=0; i<todolist.length;i++){

    newhtml=newhtml+`

    <div>
        <span>${todolist[i].item}</span>
        <span>${todolist[i].duedate}</span>
        <button onclick="todolist.splice(${i},1); displaytodoitems();">Delete</button>
    
    </div> 
       `;
      
     


}
displayitems.innerHTML= newhtml;

}

