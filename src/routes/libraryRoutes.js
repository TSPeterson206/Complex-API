const express = require('express')
const libraryController = require('../controllers/libraryControllers')
const router = express.Router()


router.get('/', libraryController.readAllBooks)
router.get('/:bookId', libraryController.readOneBook)
router.post('/', libraryController.createBook)
router.put('/:bookId', libraryController.modifyBook)
router.delete('/:bookId', libraryController.removeBook)

router.get('/:bookId/authors', libraryController.getAllAuthors)
router.get('/:bookId/authors/:authorId', libraryController.getOneAuthor)
router.post('/:bookId/authors', libraryController.createAuthor)
router.put('/:bookId/authors/:authorId', libraryController.modifyAuthor)
router.delete('/:bookId/authors/:authorId', libraryController.removeAuthor)


module.exports = router
