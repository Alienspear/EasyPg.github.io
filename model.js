let mongoose = require("mongoose");

let schema = new mongoose.Schema(
    {
        roll : {type : String , required : true , unique : true} , 
        date_of_adm : {type : Date , default : Date.now } ,
        name : {type : String , required : true} , 
        marks : Number,
        rep : Boolean
    }
)

let student = new mongoose.model("Student" , schema);

saveDoc = async()=>{
    let s1 = new student({
      roll : "1",
      name : "Ram",
      marks : "99",
      rep : false
    })

    let s2 = new student({
        roll : "2",
        name : "Sham",
        marks : "98",
        rep : false
      })

   let a =  await s1.save();
    let b = await s2.save();

  console.log(a);
  console.log(b);

    }

// await student.insertMany([s1 , s2])

module.exports = saveDoc;