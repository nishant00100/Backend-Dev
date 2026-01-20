const fs = require('fs');
const os = require('os');

setInterval(()=>{
     const totalMemory = os.totalmem()/(1024*1024*1024);
     const freeMemory = os.freemem()/(1024*1024*1024);
     const platform = os.platform();
     const cpus = os.cpus()[0].model;
     const uptime = os.uptime()/3600;

     const log= `${totalMemory} & ${freeMemory} & ${platform} & ${cpus} & ${uptime}`
     fs.appendFile("Os_dashBoard.txt", log, (err) => {
            if (err){

            console.log("Error:", err);
            }
          });
},5000)




/* // OS Module
const os = require('os');

const totalMemory = os.totalmem()/(1024*1024*1024); //  bytes to GB
const freeMemory = os.freemem()/(1024*1024*1024); //bytes to GB


const platform = os.platform(); //current operating system ka naam
const cpus = os.cpus()[0].model; //system ke CPUs ki information
const uptime = os.uptime()/3600; //system kitne seconds se chal raha hai

console.log("Total Memory:", totalMemory);
console.log("Free Memory:", freeMemory);
console.log("Platform:", platform);
console.log("CPUs:", cpus);
console.log("Uptime (in hours):", uptime); */