const http = require('http')

http.createServer(function(req,res) {
    res.write('On the way to full stack engineer!')
}).listen(3000)
console.log(`server started on 3000`)
