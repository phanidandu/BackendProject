const http = require("http");

const server=http.createServer((req,res)=>{
   console.log(req.url,req.method,req.headers)
    
   res.setHeader('Content-Type','text/html');
   res.write('<html>')
   res.write('<head><title>My First Page</title></head>')
   res.write('<body>')
   res.write('<h1>Hello from my Node.js Server!</h1>')
   
   if(req.url=='/home')
   {
      res.write('<h2>Welcome Home</h2>')
   } else
   if(req.url=='/about')
   {
      res.write('<h2>Welcome to About Us page</h2>')
   } else if(req.url=='/node')
   {
      res.write('<h2>Welcome to my Node Js project</h2>')
   }
   res.write('<body>')
   res.write('</html>')
   res.end();
})

server.listen(3000);