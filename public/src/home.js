function getTotalBooksCount(books) {
  //returns length of books array
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //returns length of accounts array
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // filters out which books are currently borrowed based on returned = true/flase
  let borrowedBooks = books.filter((book) => !book.borrows[0].returned);
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  let genres = {};

  //looping over each book in the array
  books.forEach((book) => {

    //if genre already exist, increment. Else, adds genre
    if(genres[book.genre]) {
      genres[book.genre]++;
    } else {
      genres[book.genre] = 1;
    }
  });

  //turns genre object into an array
  let genresArr = Object.keys(genres).map((genre) => {
    return { name: genre, count: genres[genre] };
  });

  //sorts array based on each genre count
  genresArr.sort((genreA, genreB) => genreB.count - genreA.count);

  // .slice() to condense to top 5 genres
  return genresArr.slice(0,5);
}

function getMostPopularBooks(books) {
  
  //creates new array which hold objects of the book and how many times it was borrowed
  let popularity = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });

  // sorts array based on how many times it was borrowed
  popularity.sort((bookA, bookB) => bookB.count - bookA.count);

  // slices array to top 5 books
  return popularity.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // create array, which contains objects with the author's name and the total borrow count across all authors books
  let authorPopularity = authors.map((author) => {
    let totalBorrows = 0;
    
    // adds up each book borrowed written by that author
    books.forEach((book) => {
      if (book.authorId === author.id) {
        totalBorrows += book.borrows.length;
      }
    });
    return { name: `${author.name.first} ${author.name.last}`, count: totalBorrows };
  });

  //sorts through authorPopularity array for most borrowed books written by author
  authorPopularity.sort((authorA, authorB) => authorB.count - authorA.count);

  // slices array for top 5 authors
  return authorPopularity.slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


//Project-_Local_library-_Qualified_assessment-Allyssa_Green-Solution