require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express();
const tasks = require('./routes/tasks.js')
const {dbConnect} = require('./db/connection.js');
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

async function main(){
  await dbConnect(process.env.CONNECTINGSTRING);
  app.listen(port, () => {
    console.log(`port is listening at ${port}..`);
  })
}

main();

