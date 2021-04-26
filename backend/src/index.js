const express = require('express');
const app = express();
const cors = require('cors'); 

require('./database.js');

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index'))

app.listen(3000);
console.log('Servidor en puerto', 3000);
