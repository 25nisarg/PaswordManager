const express = require('express')
const { MongoClient } = require('mongodb');
const bodyparser=require('body-parser')
const cors=require("cors")


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const app = express()
require('dotenv').config()

const port = 3000
app.use(bodyparser.json())
app.use(cors())
client.connect();



// Database Name
const dbName = 'PasswordManager';

//Get a Password
app.get('/', async (req, res) => {
    const db=client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult)
})
// Save a Password
app.post('/', async (req, res) => {
    const password=req.body
    const db=client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({success:true,result:findResult})
})
app.delete('/', async (req, res) => {
    const password=req.body
    const db=client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success:true,result:findResult})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
