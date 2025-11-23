document.addEventListener('DOMContentLoaded', function(){
  const container = document.getElementById('periodic-table')
  if(!window.ELEMENTS || !container) return

  // render elements in a simple left-to-right grid (by atomic number)
  ELEMENTS.forEach(el => {
    const d = document.createElement('div')
    d.className = 'element'
    d.setAttribute('data-atomic', el.number)
    d.title = el.name + ' (' + el.symbol + ')'
    d.innerHTML = `<div class="num">${el.number}</div><div class="symbol">${el.symbol}</div><div class="name">${el.name}</div>`
    d.addEventListener('click', ()=>{
      const url = `element.html?el=${el.number}`
      window.open(url, '_blank')
    })
    container.appendChild(d)
  })
})
