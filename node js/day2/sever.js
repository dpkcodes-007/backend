import dotenv from 'dotenv'
import http from 'http'
import os from 'os'
import path from 'path'

dotenv.config()

// port_env

const portfind = process.env.PORT || 3200
console.log(portfind);
  
// http_process

const httpreq = http.createServer()

httpreq.listen(portfind,()=>{
    console.log(`sucessfully running at http://localhost:${portfind}`);
    
})

// os_process

console.log(os.hostname());
console.log(os.platform());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());

// path_process

const cwd = process.cwd()//absolute path
console.log(cwd);
   
               // Returns the last part of a path
console.log(path.basename("assest","source","images","kamesh.png"));

               // joins the the movie name
console.log(path.join("./sla/institute/mern/dev"));

const filetake = path.resolve()//absolute path
console.log(filetake);

              // Resolve a specific path
console.log(path.resolve("assets", "source", "images"));





