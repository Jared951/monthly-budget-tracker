//html elements
let addToTable = document.querySelector('#input-table')
let tableTotal = document.querySelector('#totalBtn')

// functions
const postToOutputTable = (event) => {
    event.preventDefault()
    let expenseName = document.querySelector("#expenseName")
    let amount = document.querySelector('#value')
    let type = document.querySelector('#type')
    let bodyObj = { name: expenseName.value, amount: +amount.value, type: type.value }
    axios.post("http://localhost:4000/api/finances", bodyObj)
        .then(res => {
            const data = res.data[res.data.length - 1]
            console.log(data)
            expenseName.value = ''
            amount.value = ''

            const newExpense = document.createElement('div')
            newExpense.classList.add('expense')
            newExpense.id = `expense-${data.id}`
            newExpense.innerHTML = `
                <p id="newExpense">${data.name}</p>
                <p id="newExpense">Type: ${data.type}</p>
                <p id="newExpense">Amount: ${data.amount}</p>
                
                <button class="delete-btn" onclick=deleteFromOutputTable(${data.id})>Delete</button>
            `
            const outputSection = document.querySelector('#output-table')
            outputSection.appendChild(newExpense)
        }
    )
}

const deleteFromOutputTable = (id) => {
    axios.delete(`http://localhost:4000/api/finances/${id}`)
    .then(res => {
        const data = res.data
        console.log(data)

        let deleteDiv = document.querySelector(`#expense-${id}`)
        deleteDiv.remove()
        
    })
}

const getTotal = () => {
    axios.get("http://localhost:4000/api/finances")
    .then(res => {
        const data = res.data
        console.log(data)
 
        const totalTable = document.querySelector('#total-table')
        totalTable.innerHTML = `
          <div>
            <p id="the-total">Total: ${data}</p>
          </div>
        `

    })
}

// event listeners
addToTable.addEventListener('submit', postToOutputTable)
tableTotal.addEventListener('click', getTotal)