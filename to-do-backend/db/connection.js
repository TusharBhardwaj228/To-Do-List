const mongoose = require('mongoose');

const dbConnect=async(url)=>{
  const mongConnect = await mongoose.connect(url);
  console.log('connection established..');
  return mongConnect;
}

module.exports = {dbConnect};
