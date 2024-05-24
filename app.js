const express = require('express')
const app = express()
const port = 5000

app.get('/', (request, response) => {
  response.send('<h1>Home Page</h1>')
})

app.get('/about', (request, response) => {
  response.status(200).send('<h1>About Page</h1>')
})

app.all('*', (request, response) => {
  response.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port, () => {
  console.log('Server is listening on port ' + port)
})

// app.get()
// app.post()
// app.put()
// app.delete()
// app.use()
// app.all()
// app.listen()
