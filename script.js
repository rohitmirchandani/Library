const showFormButton = document.querySelector("header button");
const overlay = document.querySelector("#overlay");
const form = document.querySelector("#form");
const closeFormButton = document.querySelector(".close-form")
const formInputAll = document.querySelectorAll("#form input");
const addBookButton = document.querySelector("#add-form");
let bookList = [];
const completedButton = document.querySelector("#completed-form");



completedButton.addEventListener("click",()=>{completedButton.innerText=((completedButton.innerText=="Yes"?"No":"Yes"))});

showFormButton.addEventListener("click",showForm);
closeFormButton.addEventListener("click",closeForm);
addBookButton.addEventListener("click",addBook);


function Book(t,a,p,c){
 this.title = t;
 this.author = a;
 this.pages = p;
 this.completed = c;
}
function showForm(){
overlay.classList.add("unfocused");
form.classList.add("form-open");
}
function closeForm(){
overlay.classList.remove("unfocused");
form.classList.remove("form-open");
formInputAll.forEach((element)=>{
element.value='';
});
}
function addBook(){
let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let pages = document.querySelector("#pages").value;
let completed = document.querySelector("#completed-form").innerText;
let isCompleted = (completed=="Yes")?true:false;
let book = new Book(title,author,pages,isCompleted);
bookList.push(book);
closeForm();
displayNewBook(book);
}
function displayNewBook(book){
const main = document.querySelector("main");
main.innerHTML+=`<div class="books">
      <abbr title="Delete Book"><button class="delete-book">&#128465;</button></abbr>
      <h3 class="title">Title : ${book.title}</h3>
      <h3 class="author">Author : ${book.author}</h3>
      <h3 class="pages">Pages : ${book.pages}</h3>
      <label>Completed  : <button class="completed">${(book.completed?"Yes":"No")}</button></label>
    </div>`
    
const completedButtons = document.querySelectorAll(".completed");
completedButtons.forEach((element,index)=>{
element.addEventListener("click",()=>{changeCompleted(element,index)})
});

const deleteBookButtons = document.querySelectorAll(".delete-book");
deleteBookButtons.forEach((element,index)=>{
element.addEventListener("click",()=>{deleteBook(element,index)})
});
}
function changeCompleted(element,index){
if(index<bookList.length){
element.innerText = (element.innerText=="Yes")?"No":"Yes";
bookList[index].completed = (element.innerText=="Yes")?true:false;
}
}
function deleteBook(element,index){
bookList.splice(index,1);
const bookGone = element.closest(".books");
bookGone.remove();
}
