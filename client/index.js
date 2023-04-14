//html elements
// let getAllBtn = document.querySelector('#btnId')
// let addExpenses2 = document.querySelector('#expenseBtn')
// let deleteExpense = document.querySelector('#deleteBtn')
// let incomeTable = document.querySelectorAll('.income')
// let expenseTable = document.querySelectorAll('.expense')
// let addOneExpense = document.querySelector('#addExpense') 

//functions
// const btnOne = () => {
//     axios.get("http://localhost:4000/api/allFinances")
//         .then(res => {
//             const data = res.data
//                 let firstObj = data[0]
//                 let i = 0 
//                 for (const property in firstObj){
//                     incomeTable[i].value = `${firstObj[property]}`
//                     i++ 
//                 }

//                 let secondObj = data[1]
//                 let j = 0 
//                 for (const property in secondObj){
//                     expenseTable[j].value = `${secondObj[property]}`
//                     j++ 
//                 }


//         })
// }

// const btnTwo = () => {
//     axios.post("http://localhost:4000/api/addExpenses", {newExpense: addOneExpense.value})
//         .then(res => {
//             const data = res.data
//             console.log(data)
//             btnOne()
//         })
// }

// const btnThree = () => {
//     axios.delete("http://localhost:4000/api/deleteExpenses:id")
//     .then(res => {
//         const data = res.data
//         console.log(data)
//     })
// }

//event listeners
// getAllBtn.addEventListener('click', btnOne)
// addExpenses2.addEventListener('click', btnTwo)
// deleteExpense.addEventListener('click', btnThree)


let inputTable = document.querySelector('input-table')
let outputTable = document.querySelector('output-table')
let totalTable = document.querySelector('total-table')

// gets info from first table THIS MIGHT NOT BE NEEDED
const getOutputTable = () => {
    // axios.get goes here
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

// post first table content to second table
const postOutputTable = () => {
    // axios.post goes here
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

// adds up the total from the second table
const getTotal = () => {
    // axios.get? goes here
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

// function to delete a row in second table similar to alecs garbage cans from todo
const deleteOutputTable = () => {
    // axios.delete goes here
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

// heres a loop i started writing to loop over the items in the input table that will go into the output table
const toNewTable = () => {
    let tableOne = document.getElementById('input-table')
    let tableTwo = document.getElementById('output-table')
    for(let i = 0; i < tableOne.rows.length; i++){
        let row = tableOne.rows[i]
        let newRow = document.createElement('tr')
            for(let j = 0; j < row.cells.length; j++){
                let cell = row.cells[j]
                let newCell = document.createElement('td')
                newCell.innerHTML = cell.innerHTML
                newRow.appendChild(newCell)
            }
        newTableBody.appendChild(newRow)
    }
}

// Get the existing table
// Get the body of the new table
  
// Loop through each row in the existing table
// Create a new row for the new table
  
// Loop through each cell in the row and add it to the new row
// Create a new cell for the new row
// Copy the contents of the existing cell to the new cell
// Add the new cell to the new row
// Add the new row to the new table

  

inputTable.addEventListener('', getOutputTable)
outputTable.addEventListener('', postOutputTable)
totalTable.addEventListener('', getTotal)