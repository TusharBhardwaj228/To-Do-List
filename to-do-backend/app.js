require('dotenv').config();
const express = require("express");
const app = express();
const tasks = require('./routes/tasks.js')
const {dbConnect} = require('./db/connection.js');

const port = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/v1/tasks', tasks);

async function main(){
  await dbConnect(process.env.CONNECTINGSTRING);
  app.listen(port, () => {
    console.log(`port is listening at ${port}..`);
  })
}

main();
