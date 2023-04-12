const info = require('./db.json')

module.exports = {
    
    getInfo: (req, res) => {
        res.status(200).send(info)
    },
    
    addExpenses: (req, res) => {
        res.status(200).send(info)
    },

    deleteExpenses: (req, res) => {
        res.status(200).send(info)
    }

}