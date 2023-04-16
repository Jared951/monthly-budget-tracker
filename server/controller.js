let globalId = 1

const tempObj = {id:1, name: "amazon", amount: 30, type: "minus"}
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
        // needs to be able to delete from the second table, any expenses that were added
        // similar concept to the trash cans from Alec's to-do app
        let index = finances.findIndex(elem => elem.id === +req.params.id)
        finances.splice(index, 1)
        res.status(200).send(finances)
    },

    getTotalBudget: (req, res) => {
        // needs to grab the total from all of the createExpenses added into table2 
        // the trick is that it needs to only grab from the total and then display it in the total-table 
        // use .reduce()
        // write if statement to return the current income 
        // add to acc to return the dollar amount
        // return acc minus the dolar 
        // check if the acc will add or subtract
        // once it returns that it will equal the total 

        const total = finances.reduce((acc, curr) => acc + curr.amount, 0)
        res.status(200).send(total.toString())
    }

}


// one more get total
// one more get finances

// restart server before demo and don't close the application and open it up back again on the fe 
// rs to restart server

// username input at top of page