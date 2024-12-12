// seeder is just to test data for new apps , input test datas

const mongoose = require('mongoose');
const Book=require('../models/book');

// Open database
mongoose.connect('mongodb://127.0.0.1:27017/bookTrackerDB')
    .then(() =>{ 
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("error");
        console.log(err.error);
    })

// Test Area 
const seedDB = async () => {
    // await User.deleteMany({});to have fresh database
    // test data 
   /* 
  SIngle data
   const books = new Book ({
        name:'baaw',
        category:'Funsda',
        quantity:2,
        price:280
    })*/
 
        // MULTIPLE DATA  
        const books = [
            {
                name: 'Brave New World',
                category: 'Science Fiction',
                quantity: 3,
                price: 200,
                description: 'A dystopian novel set in a futuristic society where technology, social control, and happiness are prioritized over individual freedom.'
            },
            {
                name: 'The Great Gatsby',
                category: 'Classic',
                quantity: 5,
                price: 180,
                description: 'A novel set in the Jazz Age on Long Island, exploring themes of wealth, class, and the American Dream.'
            },
            {
                name: 'Moby-Dick',
                category: 'Adventure',
                quantity: 4,
                price: 250,
                description: 'The epic tale of Captain Ahab’s obsessive quest to hunt the great white whale, Moby Dick.'
            },
            {
                name: 'The Catcher in the Rye',
                category: 'Classic',
                quantity: 6,
                price: 210,
                description: 'A story about a teenager’s journey through life as he struggles with his place in the world and the loss of innocence.'
            },
            {
                name: '1984',
                category: 'Dystopian',
                quantity: 8,
                price: 220,
                description: 'A grim, dystopian novel set in a totalitarian society ruled by "Big Brother", a government that watches and controls every aspect of life.'
            },
            {
                name: 'To Kill a Mockingbird',
                category: 'Classic',
                quantity: 7,
                price: 230,
                description: 'A novel about racial injustice in the Depression-era South, told from the perspective of a young girl named Scout Finch.'
            },
            {
                name: 'Fahrenheit 451',
                category: 'Science Fiction',
                quantity: 4,
                price: 190,
                description: 'A novel about a society where books are banned and "firemen" burn any that are found.'
            },
            {
                name: 'The Hobbit',
                category: 'Fantasy',
                quantity: 10,
                price: 300,
                description: 'The adventure of Bilbo Baggins, a hobbit who is swept into a quest with a group of dwarves to reclaim their stolen treasure from the dragon Smaug.'
            },
            {
                name: 'Pride and Prejudice',
                category: 'Romance',
                quantity: 5,
                price: 160,
                description: 'A novel of manners that explores the complex relationships between Elizabeth Bennet and the aristocratic Mr. Darcy.'
            },
            {
                name: 'Harry Potter and the Sorcerer\'s Stone',
                category: 'Fantasy',
                quantity: 12,
                price: 350,
                description: 'The story of a young wizard, Harry Potter, who discovers his magical heritage and battles the dark wizard who killed his parents.'
            }
        ];


        await Book.insertMany(books);



    // if you want to insert multiple data user Book.insertMany
    // await books.save();//single data
}

seedDB().then(() =>{
    mongoose.connection.close();
})
