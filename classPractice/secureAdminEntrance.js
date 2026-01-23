const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
    const parseUrl = url.parse(req.url , true)
    if(parseUrl.pathname==='/admin'){
        const {user , password} = parseUrl.query;
        
        const UniqueId=Date.now();
        const log = (`For the ${user} credinals match.. with unique id ${UniqueId}`)
         const log2 = (`For the ${user} credinals not match.. with unique id ${UniqueId}`)

        if(user==admin && password==1234){
            fs.appendFile("admin_dashBoard.txt", log , (err)=>{
                     if (err) console.log("");
             });
        }else{
            fs.appendFile("admin_dashBoard.txt", log2, (err)=>{
                     if (err) console.log("no match rejected ");
             });
        }
        res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <html>
        <head>
          <title>Login DashBoard</title>
        </head>
        <body ">
          <h1> Wlcome ${name}</h1>
          
         
        </body>
      </html>
        `)

    }else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
    
})
server.listen(8000, () => {
  console.log("Server running on port 8000");
});

