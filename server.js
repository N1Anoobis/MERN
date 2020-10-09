const express = require('express');
const mongoose = require('mongoose');

// const cors = require('cors')

const app = express();
// app.use(cors())

// app.use(express.static(path.join(__dirname, 'build')));
const carRoutes = require('./routes/api/cars.routes');

app.use('/api', carRoutes);

  
const db = ('mongodb+srv://slawomir:energy2000@cluster0.rqbyt.mongodb.net/ShopItemsDB?retryWrites=true&w=majority');

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB Connected...'))
  .catch(err => console.log(err));




const port = process.env.PORT || 8000;

app.listen(port,() => console.log(`Server started on port ${port}`));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


