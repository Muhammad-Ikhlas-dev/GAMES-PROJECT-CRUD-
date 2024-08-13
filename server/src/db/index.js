const mongoose =require('mongoose');
const {DATABASE_NAME} =require('../../constants.js');

const connectDb =async () => {
try{
  // console.log(process.env.connection_string);
const connectionInstance= await mongoose.connect(
`${process.env.connection_string}/${DATABASE_NAME}`
);
console.log(`\nMONGODB connected !! DB HOST: ${connectionInstance.connection.host}.`)
} catch(error){
  console.log("MONGODB connection failed",error)
  process.exit(1)
}
}

module.exports={connectDb}
