const fs = require('fs');

fs.mkdir("newDirectory" ,(err) =>{
    if(err) return ;
    console.log("Directory createeed !");
})
// 
fs.mkdir("folders/folder1/folder2", {recursive :true }, (err)=>{
    if(err){
        console.log("Drectory creation faled" ,err);
        return;
    }else{
        console.log("Directory created!")
    }
})

// now the task is to read the directory for this we have to use it

fs.readdir("newDirectory" , (err ,file)=>{
    if(err){
        console.log("error", err); return;
    }else{
        console.log("data reads sucsessfuly !")
    }
})
// if we want to remove empty folders  we can remove using this commads !
// fs.rmdir("newDirectory" , (err)=>{
//     if(err){
//         console.log(err); return;
//     }else{
//         console.log("directory is removed !")
//     }
// })
// if there are files in the directory then we can remeove using this 

fs.rm("newDirectory",{recursive :true } ,(err)=>{
    if(err) {
        console.log(error) ; return 
    }else{
        console.log("directory remove succesfully !")
    }
})

