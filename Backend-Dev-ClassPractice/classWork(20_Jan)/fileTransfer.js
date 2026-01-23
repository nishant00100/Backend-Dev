const fs=require("fs");
fs.copyFileSync("test.txt","new_test.js");
fs.copyFile("test.txt","new_test.js",(err) => {
    if(err){
        console.log("Error occureds",err);
    } else{
        console.log("This is copied");
    }
})


fs.unlink("test.txt",(err) => {
    if(err){
        console.log("Error occured",err);
    } else{
        console.log("File is deleted");
    }
})