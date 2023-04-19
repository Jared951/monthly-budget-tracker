const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { createExpense, deleteExpense, getTotalBudget } = require('./controller')

app.post('/api/finances', createExpense)
app.delete('/api/finances/:id', deleteExpense)
app.get('/api/finances', getTotalBudget)

app.listen(4000, () => console.log('Server is up on port 4000'))