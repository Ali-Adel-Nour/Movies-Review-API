const express = require('express');
const app = express();
const reviews = require('./api/reviews.route.js');
const ReviewsDAO = require ("./dao/reviewsDAO.js")

const mongodb = require("mongodb")


require('dotenv').config();

const MongoClient = mongodb.MongoClient



const uri = process.env.DATABASE_URL



MongoClient.connect(
    uri,{
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true,
    }
)

.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})

.then(async client =>{
 await ReviewsDAO.injectDB(client)
 
});


