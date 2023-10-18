function findAuthorById(authors, id) {
  let found = authors.find((author) => {
    return author.id === id;
  });
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => {
    return book.id === id;
  });
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = [];
  let returned = [];

  books.forEach((book) => {
    //If book returned = true, pushed to returned array. Else pushed to borrowed array
    book.borrows[0].returned ? returned.push(book) : borrowed.push(book);
  });
  return [borrowed, returned];
}


function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map(borrow => {
    //checks if account id matches borrow id
      const account = accounts.find(acc => acc.id === borrow.id);
      //returns both objects
      return {...borrow, ...account};
  });

  // .slice() for 10 borrowers limit
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
