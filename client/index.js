//html elements
let addToTable = document.querySelector('post-table')
let deleteFromTable = document.querySelector('deleteBtn')
let tableTotal = document.querySelector('totalBtn')

// functions

// post first table array to second table
// Get the existing table
// Get the body of the new table
  
// Loop through each row in the existing table
// Create a new row for the new table
  
// Loop through each cell in the row and add it to the new row
// Create a new cell for the new row
// Copy the contents of the existing cell to the new cell
// Add the new cell to the new row
// Add the new row to the new table
const postToOutputTable = () => {
    axios.post("http://localhost:4000/api/finances")
    .then(res => {
        const data = res.data
        console.log(data)
    })
    //inprogress
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
    //inprogress
    
}

// function to delete a row in second table similar to alecs garbage cans from todo 
// will delete everything from that row including the row itself to not leave blanks
// in params put id axios.delete${id} `/api/finances/${id}`
const deleteFromOutputTable = () => {
    axios.delete(`http://localhost:4000/api/finances/${id}`)
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

// adds up the total from the second table but only the amount to be displayed in total-table
// also needs to read from the income or expense option so that the function knows to add or subtract
// possibly just when expense is selected it subtracts from the total
// when income is selected it adds
const getTotal = () => {
    axios.post("http://localhost:4000/api/finances")
    .then(res => {
        const data = res.data
        console.log(data)
    })
}

// separate function here that passes

addToTable.addEventListener('click', postToOutputTable)
deleteFromTable.addEventListener('click', deleteFromOutputTable)
tableTotal.addEventListener('click', getTotal)