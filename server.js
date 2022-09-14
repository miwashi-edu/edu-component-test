const express = require('express')
const app = express()

const PORT = env.process.PORT || PORT

app.use(express.json())

app.use('/api/user', require('routes/user.js')

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`)
})