let myLibrary = [];

function book (title, author, length, haveRead){
    this.title = title;
    this.author = author; 
    this.length = length;
    this.haveRead = haveRead;

    this.info = function(){
        return `${title} by ${author}, ${length} pages, ${haveRead}`;
   }

   
   
}
//get form/modal div
let addBookForm = document.getElementById("addBookForm");

//get button to open form
let bookBtn = document.getElementById("bookBtn");

//when the button is clicked, open the form 
bookBtn.onclick = function(event){
    addBookForm.style.display = 'block';
}
//when outside the form is clicked, close 
window.onclick = function(event){
    if(event.target == addBookForm){
        addBookForm.style.display = 'none';
    }    
}
book.prototype.addBookToLibrary = function(book){
    myLibrary.push(book);
}

const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien', 295, 'read');
const nakedLunch = new book('Naked Lunch', 'William S Burroughs', 289, 'read');
const onTheRoad = new book('On the Road', 'Jack Kerouac', 247, 'read');



book.prototype.addBookToLibrary(theHobbit);
book.prototype.addBookToLibrary(nakedLunch);
book.prototype.addBookToLibrary(onTheRoad);


const cardDiv = document.getElementById('bookCard');



console.log(theHobbit.info());
console.log(myLibrary);