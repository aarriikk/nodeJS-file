const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb+srv://arikmr:arikmr@cluster0.91yobhx.mongodb.net/coba2').on('open', ()=>{
    console.log('mongoDB connected');
}).on('error', ()=>{
    console.log("MongoDB Connection Error");
});


module.exports = connection;