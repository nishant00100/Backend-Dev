
// const http =require("http")
// const fs = require("fs");
// const url=require("url");
// const server = http.createServer((req, res)=>{
//     const procedur1=url.parse(req.url,true);
//     const {name , email}=procedur1.query;
//     console.log(name,email);

//     switch(req.url){
//         case "/":
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end("<h1> Welcome to Home Page </h1>");
//             break;
//         case "/about":
//             res.writeHead(200, {"Content-Type": "text/html"});
//             res.end(`<h1> Welcome to About Page i am ${name} and my email is ${email} </h1>`);
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


const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/product") {

    const { name, price, discount } = parsedUrl.query;

    const p = Number(price);
    const d = Number(discount);

    const finalPrice = p - (p * d) / 100;

    const log = `Product: ${name} | Price: ${p} | Discount: ${d}% | Final Price: ${finalPrice}\n`;

    fs.appendFile("searches.txt", log, (err) => {
      if (err) console.log("Log write failed");
    });

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <head>
          <title>Product Search</title>
        </head>
        <body style="font-family: Arial; background:#f4f4f4; padding:20px;">
          <h1> Product Details</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Original Price:</strong> ₹${p}</p>
          <p><strong>Discount:</strong> ${d}%</p>
          <p><strong>Final Price:</strong> ₹${finalPrice}</p>
        </body>
      </html>
    `);

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});

// http://localhost:8000/product?name=Shoes&price=3000&discount=20

//http://localhost:8000/product?name=Macbook&price=150000&discount=15

