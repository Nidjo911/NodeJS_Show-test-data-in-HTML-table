// app.js
import express from 'express';

// Configuration constants
const PORT = 3000;
const VIEW_ENGINE = 'ejs';
const VIEWS_DIR = './views';

// Data generation function
const generateTestData = () => ({
  data: [1, 2, 3, 4],
  labels: [0, 1, 2, 3],
  strains: [0.1, 0.2, 0.3, 0.4],
  stresses: [100, 200, 300, 400]
});

// Create Express application
const app = express();

// View engine setup
app.set('views', VIEWS_DIR);
app.set('view engine', VIEW_ENGINE);

// Routes
app.get('/', (req, res) => {
  const { data, labels, strains, stresses } = generateTestData();

  res.render('index', {
    title: 'Tensile Test',
    labels,
    forces: data,
    strains,
    stresses
  });
});
/* 
app.use(express.static('public')); */

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


export default app;