const bodyParser = require('body-parser');

const express= require('express')

const cors = require('cors');

const reviews = require('./api/reviews.route.js');

const app = express() ;

const port =  3000;

const index = require("./index")

app.use(cors());

app.use(express.json());

app.use("/api/v1/reviews",reviews)

app.use(bodyParser.urlencoded({limit: '10mb',extended: false}))

app.use("*" , async (req, res) => 

    res.status(404).json({error: "Not Found"})
)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);

})




