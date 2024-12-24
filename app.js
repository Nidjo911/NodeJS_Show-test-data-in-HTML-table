const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Step 1: Install required packages first
// npm init -y
// npm install express ejs

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Optional: Set the views directory (default is './views')
app.set('views', './views');

// Sample data
const userData = {
  title: 'My Website',
  users: [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
  ]
};

// Route to render the home page
app.get('/', (req, res) => {
/*   res.status(200).json({ message: 'Hello World!' }); */
  res.render('index', userData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
