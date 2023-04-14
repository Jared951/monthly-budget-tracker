// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
// const {getInfo, addExpenses, deleteExpenses} = require('./controller')

// app.get('/api/allFinances', getInfo)
// app.post('/api/addExpenses', addExpenses)
// app.delete('/api/deleteExpenses:id', deleteExpenses)

const { createExpense } = require('./controller')

app.post('/api/postFinances', createExpense)
app.get//to be continued
app.delete//to be continued

// Start server with app.listen
app.listen(4000, () => console.log('Server is up on port 4000'))