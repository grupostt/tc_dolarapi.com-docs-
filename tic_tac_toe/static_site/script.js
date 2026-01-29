const cells = document.querySelectorAll('.cell')
let player = 'X'
const board = Array(9).fill('')

function checkWinner(b){
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for(const [a,c,d] of lines){
    if(b[a] && b[a] === b[c] && b[a] === b[d]) return b[a]
  }
  return null
}

function updateStatus(){
  document.getElementById('player').textContent = player
}

function reset(){
  for(let i=0;i<9;i++){ board[i]=''; cells[i].textContent=''; }
  player='X'; updateStatus();
}

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const pos = parseInt(cell.dataset.pos)
    if(board[pos]) return
    board[pos]=player
    cell.textContent = player
    const winner = checkWinner(board)
    if(winner){
      setTimeout(()=>alert('¡Gana ' + winner + '!'), 10)
    } else if(board.every(Boolean)){
      setTimeout(()=>alert('Empate'), 10)
    } else {
      player = player === 'X' ? 'O' : 'X'
      updateStatus()
    }
  })
})

document.getElementById('reset').addEventListener('click', reset)
