let globalId = 1

const tempObj = {id:1, name: "amazon", amount: 30, type: "income"}
const finances = []

module.exports = {

    createExpense: (req, res) => {
        let { name, amount, type } = req.body
        let newExpense = {
            id: globalId,
            name: name,
            amount: amount,
            type: type
        }
        finances.push(newExpense)
        res.status(200).send(finances)
        globalId++
    },

    deleteExpense: (req, res) => {
        let index = finances.findIndex(elem => elem.id === +req.params.id)
        finances.splice(index, 1)
        res.status(200).send(finances)
    },

    getTotalBudget: (req, res) => {
        let total = 0
  
        for (let i = 0; i < finances.length; i++) {
            const finance = finances[i]
          
            if (finance.type === 'Income') {
                total += finance.amount
            } else if (finance.type === 'Expense') {
                total -= finance.amount
            }
        }
        
        console.log(finances)
      
        res.status(200).send(total.toString());
    }

}