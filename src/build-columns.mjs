export function buildColumns({ jsLoadedSync, sync, css, use }) {
  const table = document.body.querySelector('table tbody')
  const row = table.appendChild(document.createElement('tr'))
  const [zeroeth, first, second, third] = [0, 1, 2, 3].map((_) => {
    return row.appendChild(document.createElement('td'))
  })

  zeroeth.innerText = jsLoadedSync ? '✔' : ''
  first.innerText = sync ? '✔' : ''
  second.innerText = `:${css}`
  ;(async () => {
    third.classList.add(await use())
  })()
}
