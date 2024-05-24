const http = require('http')
const { readFileSync } = require('fs')

// const homepage = readFileSync('./index.html')
const homepage = readFileSync('./navbar-app/index.html')

/** --- The server needs to explicitly  handle resources within the index.html, like style.css, logo.svg, browser-app.js ---*/

const styleSheet = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const homeJS = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((request, response) => {
  const url = request.url
  // Let's add header info and status

  if (url === '/') {
    response.writeHead(200, { 'content-type': 'text/html' })
    response.write(homepage)
    response.end()
  } else if (url === '/styles.css') {
    response.writeHead(200, { 'content-type': 'text/css' })
    response.write(styleSheet)
    response.end()
  } else if (url === '/logo.svg') {
    response.writeHead(200, { 'content-type': 'image/svg+xml' })
    response.write(logo)
    response.end()
  } else if (url === '/browser-app.js') {
    response.writeHead(200, { 'content-type': 'text/javascript' })
    response.write(homeJS)
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
