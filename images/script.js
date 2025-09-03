function Books (title,author,pages){
    this.title=prompt("plz enter a title"),
    this.author=prompt("plz enter the author name"),
    this.pages=parseInt(prompt("plz enter the number of pages"))
this.getsummary=function(){console.log(`this is a book about ${this.title} that is written by ${this.author} and has ${this.pages} pages`)}

}
const book1=new Books()
console.log(book1.title)
console.log(book1.author)
console.log(book1.pages)
book1.getsummary();
