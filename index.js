const express = require ("express");
const app = express();
const bodyParser = require('body-parser');
const cors =require('cors');
const connection = require('./DBConnection');
const postsAPI = require('./studentsAPI');

// const logger = (req,res,next) => {
//     console.log("Hello World");
//     next();
// }
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors({origin: '*'}));

app.use('/students',postsAPI);

const PORT = 5000;
app.listen(PORT, () => {console.log(`Server started at ${PORT}`)});