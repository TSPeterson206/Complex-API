const libraryModel = require('../models/libraryModels')

function createBook(req, res, next){
    const newBook = libraryModel.create(req.body)
  
    if(newBook.error) return next( { status: 400, message: newBook })
    
    res.status(201).send({ data: newBook })
  }
  
  function modifyBook(req, res, next){
    const newBook = libraryModel.modify(req.params.bookId, req.body)
  
    if(newBook.error) return next( { status: 400, message: newBook })
    
    res.status(201).send({ data: newBook })
  }
  
  function readAllBooks(req, res, next){
    const books = libraryModel.getAll()
    
    res.send({data: books})
  }
  
  
  function readOneBook(req, res, next){
    const book = libraryModel.getOne(req.params.bookId)
  
    if(!book) return next({status: 404, message: book })
  
    res.status(200).send(book)
  }
  
  function removeBook(req, res, next){
    const book = libraryModel.remove(req.params.bookId)
  
    if(!book) return next({status: 404, message: book })
  
    res.status(200).send(book)
  }
  
  function createAuthor(req, res, next){
    const newBook = libraryModel.createAuthor(req.params.bookId, req.body)
  
    if(newBook.error) return next( { status: 400, message: newBook })
    
    res.status(201).send({ data: newBook })
  }
  
  function modifyAuthor(req, res, next){
    const newBook = libraryModel.modifyAuthor(req.params.bookId, req.params.authorId, req.body)
  
    if(newBook.error) return next( { status: 400, message: newBook })
    
    res.status(201).send({ data: newBook })
  }
  
  function getAllAuthors(req, res, next){
    const books = libraryModel.getAllAuthors(req.params.bookId)
    
    res.send({data: books})
  }
  
  
  function getOneAuthor(req, res, next){
    const book = libraryModel.getOneAuthor(req.params.bookId, req.params.authorId)
  
    if(!book) return next({status: 404, message: book })
  
    res.status(200).send(book)
  }
  
  function removeAuthor(req, res, next){
    const book = libraryModel.removeAuthor(req.params.bookId, req.params.authorId)
  
    if(!book) return next({status: 404, message: book })
  
    res.status(200).send(book)
  }
  
  module.exports = { createBook, readAllBooks, readOneBook, removeBook, modifyBook, createAuthor, getAllAuthors, getOneAuthor, removeAuthor, modifyAuthor }