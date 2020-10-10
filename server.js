const express = require('express');
const mongoose = require('mongoose');
const app = express();

const carRoutes = require('./routes/api/cars.routes');
app.use('/api', carRoutes);

const db = ('mongodb+srv://slawomir:energy2000@cluster0.rqbyt.mongodb.net/ShopItemsDB?retryWrites=true&w=majority');
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 8000;
app.listen(port,() => console.log(`Server started on port ${port}`));

