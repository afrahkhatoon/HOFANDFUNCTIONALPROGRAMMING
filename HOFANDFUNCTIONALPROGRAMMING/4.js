/*
4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized.
*/

let books = [
    {
      "title": "The Hunger Games",
      "author": "suzanne collins",
      "year": 2008
    },
    {
      "title": "The Girl with the Dragon Tattoo",
      "author": "stieg larsson",
      "year": 2005
    },
    {
      "title": "The Help",
      "author": "kathryn stockett",
      "year": 2009
    },
    {
      "title": "Gone Girl",
      "author": "gillian flynn",
      "year": 2012
    },
    {
      "title": "The Fault in Our Stars",
      "author": "john green",
      "year": 2012
    }
  ]; // list of books with title, author, and publication year
  
  let filteredBooks = books.filter(book => book.year >= 2010); // filter out books published before 2010
  
  let capitalizedBooks = filteredBooks.map(book => {
    return {
      "title": book.title,
      "author": book.author.split(" ").map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" "),
      "year": book.year
    }
  }); // capitalize author names in the remaining books and create a new array
  
  console.log(capitalizedBooks); // display the new array with filtered and capitalized books
  