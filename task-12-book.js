const book = {
    title: "elder of rings",
    author: "Руэл Толкин",
    year: 1954,
  
    // Метод для получения названия книги
    getTitle: function () {
      return this.title;
    },
  
    // Метод для изменения названия книги
    setTitle: function (newTitle) {
      this.title = newTitle;
    },
  
    // Метод для получения автора книги
    getAuthor: function () {
      return this.author;
    },
  
    // Метод для изменения автора книги
    setAuthor: function (newAuthor) {
      this.author = newAuthor;
    },
  
    // Метод для получения года издания книги
    getYear: function () {
      return this.year;
    },
  
    // Метод для изменения года издания книги
    setYear: function (newYear) {
        this.year = newYear
    },
};
console.log(book.getTitle());
book.setTitle('The Hobbit, or There and Back Again');
console.log(book.getTitle());

console.log(book.getAuthor()); 
book.setAuthor('Джон Рональд');
console.log(book.getAuthor());

console.log(book.getYear()); 
book.setYear(1937);
console.log(book.getYear()); 

  