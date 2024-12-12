const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Book Schema
const bookSchema = new Schema({
    name: { 
        type: String, 
        required: [true, 'Book name is required'] // Custom error message
    },
    category: { 
        type: String, 
        required: [true, 'Category is required']
    },
    price: { 
        type: Number,
        required: [true, 'Price is required'], 
        default: 1,
        min: [1, 'Price must be positive']
    },
    quantity: { 
        type: Number,
        required: [true, 'Quantity is required'], 
        default: 1,
        min: [1, 'Enter a valid quantity of book']//min,error message
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: { 
        type: String,
        required: false 
    },

    //to be updated
    // publishedYear: { type: Number, required: true },
    // author: { type: String, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
