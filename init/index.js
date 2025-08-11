const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/StayEase';

main().then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log("Error Caught - ",err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner: "689772e124128b6fda01830d"}))
   await Listing.insertMany(initData.data);
   console.log("Data was Initialized");
};
initDB();