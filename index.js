const express = require("express");
const mongoose = require("mongoose");
const Person = require("./model/Person");
const modelperson = require("./model/Person");
require("dotenv").config();
const app = express();
const link = process.env.MONGO_UR;

mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("Connection Successful!");
});

//Create and Save a Record of a Model

    const document = new modelperson({
        name: "Najet",
        age: 18,
        favoratefoods: ["broudou"],
    });

    document.save((error) => {
        if (error) return console.log(error);
        console.log("successfully saved");
    });


//Create Many Records with model.create()

    //     const tableManypeople = [
    //         {
    //             name: "Najet",
    //             age: 18,
    //             favoratefoods: ["broudou","spaguitti","burritos"],
    //         },
    //         {
    //             name: "Safa",
    //             age: 20,
    //             favoratefoods: ["Pizza", "burritos"],
    //         },
    //         {
    //             name: "Seddik",
    //             age: 10,
    //             favoratefoods: ["Salade", "Puttanesca"],
    //         },
    //         {
    //             name: "Omar",
    //             age: 15,
    //             favoratefoods: ["burritos"],
    //         },
    //         {
    //             name: "Mary",
    //             age: 35,
    //             favoratefoods: ["Lablebi"],
    //             },
    //         {
    //             name: "Jonas",
    //             age: 28,
    //             favoratefoods: ["Burger", "burritos"],   
    //             }
    //     ];

    // modelperson.create(tableManypeople, (err) => {
    //     if (err) return console.log(err);
    //     console.log("table done");
    // });


//Use model.find() to Search Your Database
    // Person.find({ name: "Najet" }, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });


//Use model.findOne() to Return a Single Matching Document from Your Database
    // Person.findOne({ favoratefoods: "broudou" }, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });


//Use model.findById() to Search Your Database By _id

    // let _id = "6245c9fac1e04fd0f5a998e9";
    // Person.findById({ _id }, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });



//Perform Classic Updates by Running Find, Edit, then Save

    // modelperson.findById("6245c9fac1e04fd0f5a998e9", (err, rep) => {
    //     if (err) {
    //         return console.log(err);
    //     } else {
    //         // add "hamburger"
    //         rep.favoratefoods.push("hamburger");
    //         rep.save();
    //         console.log(rep);
    //     }
    // });



//Perform New Updates on a Document Using model.findOneAndUpdate()

    // Person.findOneAndUpdate({name: "Safa"}, {age: 27}, {new: true}, (err, data) => {
    //     if(err) throw err 
    //     console.log(data)
    //    }); 

  
//Delete One Document Using model.findByIdAndRemove

    // Person.findByIdAndRemove("6245c9fac1e04fd0f5a998ea", (err, data) => {
    //     if (err) {
    //       return console.log(err);
    //     } else {
    //       console.log("successfully removed");
    //     }
    //   });



//MongoDB and Mongoose - Delete Many Documents with model.remove()

    // Person.remove({name: "Mary"}, (err,done)=>{
    //     if(err) throw err 
    //    console.log(done)
    //  }); 


//Chain Search Query Helpers to Narrow Search Results
    // Person.find({favoratefoods:{$all:["burritos"]}}).sort({name:"asc"}).limit(5).select("name age").exec((err,done)=>{
    //         if(err) throw err 
    //        console.log(done)
    //      })


       
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
