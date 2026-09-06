const mongoose=require("mongoose");
const initData= require("./data.js");
const Listing=require("../models/listing.js");
const dbUrl=process.env.ATLASDB_URL;

async function  main(){
    await mongoose.connect(dbUrl);
};

main().then(()=>{
    console.log("connecto to schema");
}).catch((err)=>{
    console.log(err.errors);
});

const initDb = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({...obj, owner: "6a873ececc52fb827f55a978"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDb();