const express = require('express');
const cors = require('cors');
const { getCars } = require('./app/app.service');

// ** express app
const app = express();
const port = 3000;

// ** middleware & static files *******************
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ info: 'Node is UP-⬆️ And listening for requests...' });
});

app.get('/cars', (req, res) => {
  res.send(getCars());
});

// middleware - 404 (final match)
app.use((req, res) => {
  res.status(404).json({ 404: 'Please try a valid URL' });
});

const successfully = () => {
  console.log('\n', ' Compiled successfully!');
  console.log(`
  🔗 Server listening on : http://localhost:${port} 🔌 
`);
};

app.listen(port, () => {
  successfully();
});
