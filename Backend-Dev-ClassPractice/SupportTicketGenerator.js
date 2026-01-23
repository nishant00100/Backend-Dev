const fs = require('fs');
const http =require("http");
 const url=require("url");

const server = http.createServer((req, res)=>{
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl);
    if(parseUrl.pathname ==="/complain"){
        
        const { name, issue, priority } = parseUrl.query;
       // console.log(`${name}`);

        const ticket = Math.random()+1;
        const log =(`For the ${name} ticket is generated ${ticket}`);

        if(priority ==='high'){
            fs.appendFile("Urgent.txt", log , (err)=>{
                 if (err) console.log("urgent file rejected ");
            })
        }else{
            fs.appendFile("normal_complainst.txt", log , (err)=>{
                 if (err) console.log("complain file rejected ");
            })
        }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>Comaplain DashBoard</title>
        </head>
        <body ">
          <h1> Details</h1>
          <p>Name:</strong> ${name}</p>
          <p>Issue:</strong> ${issue}</p>
          <p>Priority:</strong> ${priority}</p>
         
        </body>
      </html>
    `);

    }else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
})

server.listen(8000, () => {
  console.log("Server running on port 8000");
});


// http://localhost:8000/complain?name=Ankit&issue=nofood&priority=high


