const mongoose = require('mongoose');
const Book = require('../../models/book');

// Open database
mongoose.connect('mongodb://127.0.0.1:27017/bookTrackerDB')
    .then(() =>{ 
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("error");
        console.log(err.error);
    })


// Export async for working with data
// Export   sync for non-data routes

// List of all Book 
exports.books = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 10; // Items per page
        const skip = (page - 1) * limit;

        // Use async/await to count the documents and fetch the books
        const count = await Book.countDocuments({});  // Counting total books
        const books = await Book.find()  // Fetch books for the current page
            .skip(skip)
            .limit(limit);

        const totalPages = Math.ceil(count / limit);  // Calculate total pages
        
        // Render the page with books and pagination data
        res.render('index', {
            books: books,
            currentPage: page,
            totalPages: totalPages,
            totalBooks: count
        });
    } catch (err) {
        console.error('Error retrieving books:', err);
        res.status(500).send('Error retrieving books');
    }
};

// add user forms 
exports.addNewBook = (req, res) => {
    res.render('add');
};
// create user 
exports.addBook = async (req, res) => {
    console.log(req.body);
    const newBook = new Book(req.body);
    try {
        await newBook.save();
        res.redirect('/');
    } catch (err) {
        console.error('Error adding new book', err);
        res.status(500).send('Error creating the book');
        
    }
};
// view specific user 
exports.viewBook=async(req,res)=>{
    const book = await Book.findById(req.params.id);
    res.render('info',{book});
}

// update user form 
exports.editBookInfo = (req, res) => {
    const bookId = req.params.id;

    // Find the book by ID
    Book.findById(bookId)
        .then(book => {
            if (!book) {
                return res.status(404).send('Book not found');
            }
            res.render('edit', { book });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Server error');
        });
};
// update user 
exports.updateBookInfo = (req, res) => {
    const { name, category, price, quantity, description } = req.body;
    const bookId = req.params.id;

    // Find the book by ID and update it
    Book.findByIdAndUpdate(bookId, {
        name,
        category,
        price,
        quantity,
        description,
    }, { new: true })  // The 'new' option returns the updated document
    .then(updatedBook => {
        res.redirect('/');  // Redirect to the homepage or another page after update
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error updating the book');
    });
};
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        console.error('Error deleting book', err);
        res.status(500).send('Error deleting the book');
    }
};
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books from the database
        res.render('index', { books }); // Pass books to EJS
    } catch (err) {
        console.error('Error fetching books:', err);
        res.status(500).send('Server error');
    }
};






 