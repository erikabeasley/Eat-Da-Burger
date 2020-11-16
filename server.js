// Install Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));

// Parse the body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Integrate routes
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Allow server to grab any port, but set 7000 as standard default
const PORT = process.env.PORT ||7000;
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost: ${PORT}`);
});