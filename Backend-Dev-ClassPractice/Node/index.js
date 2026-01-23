// const fs= require("fs");
// fs is file system module which is used to work with files

// const math = require("./math");
// console.log(math.add(5,10));
// console.log(math.remove(10,5));
// console.log(math.AreaofCircle(5));


// const fs = require("fs");
// fs.writeFileSync("./test.txt", "hello qorld")

// const data = fs.readFileSync("./test.txt", "utf-8");
// const asyncFile= fs.readFile("./test.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.log("error", err)
//         }else{
//             console.log("data", data)
//             }   
//             })
//             ;
// console.log(data);

//append data to existing file
// fs.appendFileSync("./test.txt", "  welcome to nodejs");

// // write file asynchronously
// fs.writeFile("./test1.txt", "hello world from async file", (err)=>{
//     if(err){
//         console.log("error", err)
//     }else{
//         console.log("file written successfully")
//     }
// });

// const { logActivity } = require("./logger");

// logActivity("Server started");
// logActivity("User logged in");



// const http =require("http")
// const fs = require("fs");

// const server = http.createServer((req,res)=>{
//     res.writeHead (200, {"Content-Type": "text/html"});
//     res.end("Response is closed ");
// })

// server.listen(8000, ()=>{
//     console.log("Server is running on port 8000");
// })

// i need to set json content , object should be sent as response

// const server = http.createServer((req,res)=>{
//     res.writeHead (200, {"Content-Type": "application/json"});
//     const user = {
//         name: "Ankit verma ",
//         age: 20,
//         city: "Aliagrh "
//     };
//     res.end (JSON.stringify(user));
// })

// server.listen(8000, ()=>{
//     console.log("Server is running on port 8000");
// })

// console.log("Hello world");


// const http =require("http")
// const fs = require("fs");


// const server = http.createServer((req, res)=>{
//     switch(req.url){
//         case "/":
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end("<h1> Welcome to Home Page </h1>");
//             break;
//         case "/about":
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end("<h1> Welcome to About Page </h1>");
//             break;
//         default:
//             res.writeHead(404, {"Content-Type": "text/html"});
//             res.end("<h1> 404 Page Not Found </h1>");        
//     }
// })
// server.listen(8000, ()=>{
//     const logdata= `[${new Date().toLocaleString()}] Server started on port 8000`;
//     require("./logger").logActivity(logdata);
//     fs.appendFile("activity2.log", `${logdata}\n`, (err) => {
//         if (err) console.log(err);
//       });
//     console.log("Server is running on port 8000");
// })



// create a server that logs each request to a file using logger.js



