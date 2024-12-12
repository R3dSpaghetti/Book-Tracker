const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController');


// router.get('/', userController.user);  
// router.get('/NewBook', userController.addNewBook); // This route shows the form
// router.post('/add-Book', userController.addBook);  // This route handles form submission
// router.get('/:id', userController.viewbook);
// router.get('/:id/edit', userController.editBookInfo);
// router.put('/:id',userController.updateBookInfo);
// router.delete('/:id',userController.deleteBook);


// // Route to display books
// router.get('/', userController.getBooks);

// // Route to delete a book
// router.post('/delete/:id', userController.deleteBook);



// module.exports= router;

// Route for displaying books
router.get('/', userController.books);

// Route to display the form for adding a new book
router.get('/NewBook', userController.addNewBook);

// Route to handle form submission for adding a new book
router.post('/add-Book', userController.addBook);

// Route to view specific book details
router.get('/:id', userController.viewBook);


// Route to display the edit book form
router.get('/:id/edit', userController.editBookInfo);
// Route to update a book
router.put('/:id', userController.updateBookInfo);


// Route to delete a book
router.post('/delete/:id', userController.deleteBook);

module.exports = router;