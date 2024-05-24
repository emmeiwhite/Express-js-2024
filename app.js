const express = require('express')
const path = require('path')

const app = express()

// setup static & middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// dump index.html in a public folder as well & server will automatically serve it. So to make a static site in node, put every static assets in the public folder
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening to port 5000')
})
