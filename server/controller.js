// const info = require('./db.json')

// module.exports = {
    
//     getInfo: (req, res) => {
//         res.status(200).send(info)
//     },
    
//     addExpenses: (req, res) => {
//         let {newExpense} = req.body
//         let addingExpense = info[1]
//         addingExpense[newExpense] = 0
//         res.status(200).send(info)
//     },

//     deleteExpenses: (req, res) => {
//         res.status(200).send(info)
//     }

// }


// id, name, amount, + or - (type)

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

    getTotalBudget: (req, res) => {
        let { name, amount, type } = req.body
        res.status(200).send(finances)
        // needs to grab the total from all of the createExpenses added
    },

    deleteExpense: (req, res) => {
        let { name, amount, type } = req.body
        res.status(200).send(finances)
        // needs to be able to delete from the second table, any expenses that were added
        // similar concept to the trash cans from Alec's to-do app
    }

}