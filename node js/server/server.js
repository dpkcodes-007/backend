import http from 'http'

const kamesh = http.createServer()

const path = 5001

kamesh.listen(path,()=>{
    console.log(`server is running http://localhost ${path}`);
    
})
