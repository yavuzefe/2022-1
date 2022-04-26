const singleBook = {
    title: "The prisoner of Azkaban",
    author: "J. K. Rowling",
    published: 1999,
    numberOfPages: 448,
    rating: 5,
    bestseller: true,
    series: "Harry Potter",
    volume: 3,
    ISBN: "0439136350",
    publisher: "Scholastic",
    bookmarkedPage: 325,
    loadBookmarkedPage: function(){
        return this.bookmarkedPage;
    },
    staticArrowFunction: () => "I am a static return value."
};

// object constructor based on object singleBook
function Book(title, author, published, numberOfPages, rating, bestseller, series, volume, ISBN, publisher, bookmarkedPage){
    this.title = title;
    this.author = author;
    this.published = published;
    this.numberOfPages = numberOfPages;
    this.rating = rating;
    this.bestseller = bestseller;
    this.series = series;
    this.volume = volume;
    this.ISBN = ISBN;
    this.publisher = publisher;
    this.bookmarkedPage = bookmarkedPage;
    this.loadBookmarkedPage = function(){
        return this.bookmarkedPage;
    };
    this.staticArrowFunction = () => "I am a static return value."
}

let potter1 = new Book("Harry Potter and philospher's stone","J. K. Rowling", 1997, 350, 5, true, "Harry Potter", 1, "090909090", "Scholastic",0);

let potter2 = new Book("Harry Potter and the chamber of secrets","J. K. Rowling", 1998, 350, 5, true, "Harry Potter", 2, "090909090", "Scholastic",0);

let potter3 = new Book("Harry Potter and the prisoner of Azkaban","J. K. Rowling", 1999, 350, 5, true, "Harry Potter", 3, "0439136350", "Scholastic",325);

potter1.bookmarkedPage = 24;
potter1.used = true;

//console.table(potter1);

console.table(Object.keys(potter1));
console.log(Object.values(potter1));

delete potter1.used;


console.log(`"${potter3.title}" by ${potter3.author}`);

potter3.title = "Harry Potter and the prisoner of Azkaban";
console.log(`"${potter3["title"]}" by ${potter3["author"]}`);

console.log(potter1["loadBookmarkedPage"]());