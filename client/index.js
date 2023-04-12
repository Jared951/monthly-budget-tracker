//html elements
let getAllBtn = document.querySelector('#btnId')
let addExpenses2 = document.querySelector('#expenseBtn')
let deleteExpense = document.querySelector('#deleteBtn')

//functions
const btnOne = () => {
    axios.get("http://localhost:4000/api/allFinances")
        .then(res => {
            const data = res.data
            console.log(data)
        })
}

const btnTwo = () => {
    axios.post("http://localhost:4000/api/addExpenses")
        .then(res => {
            const data = res.data
            console.log(data)
        })
}

const btnThree = () => {
    axios.delete("http://localhost:4000/api/deleteExpenses:id")
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

//event listeners
getAllBtn.addEventListener('click', btnOne)
addExpenses2.addEventListener('click', btnTwo)
deleteExpense.addEventListener('click', btnThree)