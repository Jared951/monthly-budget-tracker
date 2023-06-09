let addToTable = document.querySelector('#input-table')
let tableTotal = document.querySelector('#totalBtn')

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
                <p id="newExpense"><label>Name: </label><span>${data.name}</span></p>
                <p id="newExpense"><label>Type: </label><span>${data.type}</span></p>
                <p id="newExpense"><label>Amount: </label><span>${data.amount}</span></p>
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

addToTable.addEventListener('submit', postToOutputTable)
tableTotal.addEventListener('click', getTotal)