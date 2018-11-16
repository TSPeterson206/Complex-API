const books = require('../db/library.js')
const uuid = require('uuid')


/////// Book Functions
function create(newBook) {
    const error = []
    const {
        id,
        Name,
        Borrowed,
        Description,
        Authors
    } = newBook

    if (!Name && !Borrowed && !Description) {
        error.push('Please Provide Book Info To Create')
    }
    if (typeof Borrowed !== "boolean") {
        error.push('Value needs to be a boolean!')
    }

    if (error.length) return {
        error
    }
    newBook.id=uuid()
    books.push(newBook)
    return books
}

function modify(bookId, newBook) {
    const error = []
    const bookidx = books.findIndex(ele => ele.id === bookId)
    if (bookidx === -1) {
        error.push('Not Found')
    }

    const {
        id,
        Name,
        Borrowed,
        Description,
        Authors
    } = newBook

    books[bookidx].Name = Name
    books[bookidx].Borrowed = Borrowed
    books[bookidx].Description = Description
    books[bookidx].Authors = Authors

    if (!Name && !Borrowed && !Description) {
        error.push("Please fill in all values")
    }
    if (error.length) return {
        error
    }

    return  books[bookidx] 
}

function getAll() {
    return books
}

function getOne(bookId) {

    const book = books.find(ele => ele.id === bookId)

    if (!book) {
        return {
            error: ['book not found']
        }
    }

    return book
}

function remove(bookId) {
    const bookidx = books.findIndex(ele => ele.id === bookId)

    if (bookidx === -1) return {
        error: ['Not Found']
    }

    const savedbook = books[bookidx]

    books.splice(bookidx, 1)

    return savedbook
}

///////Author Functions

function createAuthor(bookId, newAuthor) {

    const book = books.find(ele => ele.id === bookId)

    if (!book) {
        return {
            error: ['book not found']
        }
    }

    const error = []
    const {
        First_Name,
        Last_Name,
    } = newAuthor

    newAuthor.id=uuid()

    if (!First_Name && !Last_Name) {
        error.push('Please Provide Book Info To Create')
    }
    if (error.length) return {
        error
    }

    book.Authors.push(newAuthor)
    return newAuthor
}

function modifyAuthor(bookId, authorId, newAuthor) {
    const book = books.find(ele => ele.id === bookId)
    const author = book.Authors

    const authoridx = author.findIndex(ele => ele.id === authorId)

    
    const bookidx = books.findIndex(ele => ele.id === bookId)
    if (bookidx === -1) {
        error.push('Not Found')
    }

    const {
        id,
        First_Name,
        Last_Name,
    } = newAuthor

    const error = []
    if (!First_Name && !Last_Name) {
        error.push("Please fill in all values")
    }
    if (error.length) return {
        error
    }

    books[bookidx].Authors = author
    author[authoridx].First_Name = First_Name
    author[authoridx].Last_Name = Last_Name
    return author[authoridx]
}

function getAllAuthors(bookId) {
    const book = books.find(ele => ele.id === bookId)
    const author = book.Authors
    const auths = author.map((ele)=> {
        return ele
    })
    return auths
}

function getOneAuthor(bookId, authorId) {
    const book = books.find(ele => ele.id === bookId)
    const author = book.Authors

    const authoridx = author.findIndex(ele => ele.id === authorId)

    if (!book) {
        return {
            error: ['book not found']
        }
    }
    if (!author) {
        return {
            error: ['author not found']
        }
    }
    return author[authoridx]
}

function removeAuthor(bookId, authorId) {
    const bookidx = books.findIndex(ele => ele.id === bookId)
    const author = books[bookidx].Authors
    const authoridx = author.findIndex(ele => ele.id === authorId)

    if (bookidx === -1) return {
        error: ['book not Found']
    }
    if (authoridx === -1) {
        return {
            error: ['author not found']
        }
    }

    author.splice(authoridx, 1)

    return author
}

module.exports = {
    create,
    getAll,
    getOne,
    remove,
    modify,
    createAuthor,
    getAllAuthors,
    getOneAuthor,
    removeAuthor,
    modifyAuthor
}