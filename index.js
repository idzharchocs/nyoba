const express = require('express');
const app = express();
const handler = require("./handler");
const PORT = 8000;
const middleware = require("./middleware");
const { v4: uuidv4 } = require('uuid');
const cars = require('./models/cars');
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Api is already running bray')
})
// rest endpoints
app.get('/cars', handler.handleListfeeds)


app.get('/cars/:id', middleware.findAndSetFeedById, (req, res,) => {
    res.json(req.cars);
})

// delete

app.delete('/cars/:id', middleware.finAndSetFeedById, (req, res) => {
    const id = req.cars.id;
    const list = cars.filter((i) => i.id != id);
    cars = list;
    res.json({ status: 'successfully deleted' });
})
//     const id = req.params.id;
//     const feeds = feeds.find( (i) => i.id == id)

//         res.status(404).json()
    

// } ,(req, res) => {

//     console.log(req.feeds)
//     res.status(200).send(req.feeds);
// });

app.post('/cars', (req, res) => {
    // 1. get req Req Body
    // 2.push data iinto list of feeds
    // 3.return successfully created
    const { title, content, category } = req.body
    const newData = { id:uuidv4(), name,
    image,
    capacity,
    rentPerDay,
    description,
    availableAt };
    cars.push(newData);
    res.status(201).json(newData);
    

}),

// update
app.put('/cars/:id', (req, res) => {
    // 1. get id
    // 2.find data feeds by that id
    // 3.GET DATA to be update from request body
    // 4.override exisiting data with incoming data
    // 5.find index of that id
    // 6.replace data of that index with new updated data
    // 7.return json respnse with the new update data

    // bikin buat nampung id
    const id = req.params.id 
    const currentData = cars.find((i) => i.id == id)
    const payload = req.body;
    const updatedData = { ...currentData, ...payload }
    
    const exisitingId = feeds.findIndex((i) => i.id == id)
    
    feeds[exisitingId] = updatedData;
    res.status(200).json(updatedData); 

}),
app.get('*', (req, res )=> {
    res.status(404).send('404 not found')
})

app.listen(PORT,()=>console.log('listening on http://local')) 
