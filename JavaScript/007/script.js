let inputRows = document.getElementById('rows')
let inputCols = document.getElementById('columns')
let generateTableBtn = document.getElementById('generateTable')
let tableContainer = document.getElementById('table-container')

function createTable(rows, cols) {
  // Clear previous table if exists
  tableContainer.innerHTML = ''
  let table = document.createElement('table')
  table.style.borderCollapse = 'collapse'
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            td.style.border = '1px solid black'
            td.style.padding = '5px'
            td.textContent = `Row ${i + 1} Col ${j + 1}`
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    tableContainer.appendChild(table)
}
generateTableBtn.addEventListener('click', function(event) {
  event.preventDefault()
  let rows = parseInt(inputRows.value)
  let cols = parseInt(inputCols.value)
  if (rows > 0 && cols > 0) {
    createTable(rows, cols)
  } else {
    alert('Please enter positive numbers for rows and columns.')
  }
})