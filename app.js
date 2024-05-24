const http = require('http')

const server = http.createServer((request, response) => {
  console.log('user hit the server')
  // Let's add header info and status
  response.writeHead(200, { 'content-type': 'text/html' })
  response.write('<h1>Welcome to the World of Node</h1>')
  response.end()
})

server.listen(5000)
