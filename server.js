const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const router = express.Router();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/movie_rating_app', () => {
    console.log('Connection has been made');
}).catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
});

// include controllers
fs.readdirSync("controllers").forEach((file) => {
    if (file.substr(-3) == ".js") {
        const route = require('./controllers/' + file);
        route.controller(app);
    }
})

router.get('/', function(req, res){
    res.json({message: 'API initialized'});
});

const port = process.env.API_PORT || 8081;

app.use('/', router);
app.listen(port, function(){
    console.log(`API running on port ${port}`);
});

