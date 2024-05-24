const http = require('http')

const server = http.createServer((request, response) => {
  const url = request.url
  // Let's add header info and status

  if (url === '/') {
    response.writeHead(200, { 'content-type': 'text/html' })
    response.write('<h1>Homepage!</h1>')
    response.end()
  } else if (url === '/about') {
    response.writeHead(200, { 'content-type': 'text/html' })
    response.write('<h1>About Page!</h1>')
    response.end()
  } else {
    response.writeHead(404, { 'content-type': 'text/html' })
    response.write('<h1>Found Not Found!</h1>')
    response.end()
  }
})

server.listen(5000)
