// question 1 :- count..

const fs = require("fs");

fs.readFile("input.txt", "utf-8",(err,data)=>{
    if(err){
        console.log("Error", err);
        return;
    }
    const words= data.trim().split("");
    const wordCount=data.trim()===""? 0 :words.length;

    fs.writeFile("wordCount.txt",`wordCount :${wordCount}`,(err)=>{
        if(err){
            console.log("error",err);
            return;
        }
       
    })
})

