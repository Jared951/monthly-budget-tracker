// Require packages
const express = require('express')
const cors = require('cors')

// App instance
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Endpoints
const { createExpense, deleteExpense } = require('./controller')

app.post('/api/finances', createExpense)
app.delete('/api/finances/:id', deleteExpense)
app.get//to be continued


// Start server with app.listen
app.listen(4000, () => console.log('Server is up on port 4000'))