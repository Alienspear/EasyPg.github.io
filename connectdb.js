let mongoose = require("mongoose")

let URI = "mongodb+srv://dhruv:D8ru^27g@cluster0.90agcoe.mongodb.net/?retryWrites=true&w=majority"

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {
                useUnifiedTopology : true,
                useNewUrlParser : truef
            }
            )
            console.log("Database is connected with the given URI")
    }
    catch(err){
            console.log(err)
    }
}

module.exports = connectdb