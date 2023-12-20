const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
const book = getBook(3);
//const title=book.title;

//-------------------OBJECT Distructuring
const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, pages, genres, publicationDate, hasMovieAdaptation);

//-----------------Array Distructuring
//const primaryGenre = genres[0];
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

//--------------------Rest Operator
const [primary1Genre, secondary1Genre, ...otherGenres] = genres;
console.log(primary1Genre, secondary1Genre, otherGenres);

//------------------Spread Operator
//const newGenres = [genres, "new genres"]; //=> display [[genre from genres],new genres]
const newGenres = [...genres, "new genres"];
newGenres;

const updateBook = {
  ...book,
  //Adding a new prop
  moviePublicationDate: "2001-12-19",
  //Overwriting an existing prop
  pages: 1210,
}; //the last property will overwrite the prop of obj
updateBook;

const summary = `${title}, a ${pages}-page long, with author ${author} and published in ${
  publicationDate.split("-")[0]
}.The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//--------------Ternarie Operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange}`);

//-------------Arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));
const summaryArrowFct = `${title}, a ${pages}-page long, with author ${author} and published in
${getYear(publicationDate)}.The book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie`;
summaryArrowFct;

//---------------Optional Chaining....ex: book.reviews.librarything?
function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  const libraryThing = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(book));

// ----------------Map Method = a call function
const books = getBooks();
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
//alternative to remove return statement, but beside return a list of object with title and author
const essentialData1 = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData1;

//-------------Filter array
const filterBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
filterBooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

//------------------Array Reduce(accumulate)= reduce entire array to one value
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

//-----------------Array Sort
//sort() method= mutate the original array
const sortedbyPages = books.slice().sort((a, b) => b.pages - a.pages); //sort in desc way
sortedbyPages;

//-----------------Immutable array=do not mutate the original underlying array
// ---Added Book object into array
const newBook = {
  id: 6,
  title: "New title",
  author: "New author",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//-----Delete Book into array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//------Update book into array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;

//-------PROMISES
//console.log(fetch("https://jsonplaceholder.typicode.com/todos"));//promise
//then()= promise method to receive a response
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log("test");

//-------------Async/Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const result = getTodos();
console.log(result); //promise
console.log("test");
