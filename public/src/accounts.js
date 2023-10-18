function findAccountById(accounts, id) {
  let found = accounts.find((account) => {
    return account.id === id;
  });
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((LastNameA, LastNameB) => {
    //Compares if A is greater than B, .toLowerCase() to prevent errors 
    return LastNameA.name.last.toLowerCase() > LastNameB.name.last.toLowerCase() ? 1 : -1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;

  for (let book of books) {
    // Loop through the borrows in each book
    for (let borrow of book.borrows) {
      // If the account's ID matches the borrow's ID, increment totalBorrows
      if (borrow.id === account.id) {
        totalBorrows++;
      }
    }
  }

  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  // Initialize an empty array to store the books
  let possessedBooks = [];

  // Loop through the books
  for (let book of books) {
    // Check if the book is currently borrowed by the account
    if (book.borrows[0].id === account.id && !book.borrows[0].returned) {
      // If the book is currently borrowed, find the author
      let author = authors.find((author) => author.id === book.authorId);
      // Add the author details to the book object
      book['author'] = author;
      // Add the book to the possessedBooks array
      possessedBooks.push(book);
    }
  }

  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
