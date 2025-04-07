import { useState } from "react"
import "./App.css"
import JSConfetti from 'js-confetti'



const App = () => {

  const [player, setPlayer] = useState('O')
  const [result, setResult] = useState('')
  const [game, setGame] = useState(true)
  const [click, setClick] = useState(0)

  const winani = ()=>{
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '❤️','💖','😍'],
   })
  }

  const disableClick = (id) => {
    document.getElementById(id).style.pointerEvents = 'none'
  }

  const checkWinner = () => {
    const values = []
    for (let i = 1; i <= 9; i++) {
      values[i] = document.getElementById(`cell${i}`).innerHTML
    }
    if (player == values[1] && player == values[2] && player == values[3]) {
      setResult(player + " is Winner ")
      winani()
      winani()
      document.getElementById('cell1').className="winner"
      document.getElementById('cell2').className="winner"
      document.getElementById('cell3').className="winner"
      setGame(false)
    }
    else if (player == values[4] && player == values[5] && player == values[6]) {
      setResult(player + " is Winner ")
      winani()
      winani()
      document.getElementById('cell4').className="winner"
      document.getElementById('cell5').className="winner"
      document.getElementById('cell6').className="winner"
      setGame(false)
    }
    else if (player == values[7] && player == values[8] && player == values[9]) {
      setResult(player + " is Winner ")
      winani()
      document.getElementById('cell7').className="winner"
      document.getElementById('cell8').className="winner"
      document.getElementById('cell9').className="winner"
      setGame(false)
    }
    else if (player == values[1] && player == values[4] && player == values[7]) {
      setResult(player + " is Winner ")
      winani()
      document.getElementById('cell1').className="winner"
      document.getElementById('cell4').className="winner"
      document.getElementById('cell7').className="winner"
      setGame(false)
    }
    else if (player == values[2] && player == values[5] && player == values[8]) {
      setResult(player + " is Winner ")
      winani()
      document.getElementById('cell2').className="winner"
      document.getElementById('cell5').className="winner"
      document.getElementById('cell8').className="winner"
      setGame(false)
    }
    else if (player == values[3] && player == values[6] && player == values[9]) {
      setResult(player + " is Winner ")
      winani()
      document.getElementById('cell3').className="winner"
      document.getElementById('cell6').className="winner"
      document.getElementById('cell9').className="winner"
      setGame(false)
    }
    else if (player == values[1] && player == values[5] && player == values[9]) {
      setResult(player + " is Winner ")
      winani()
      document.getElementById('cell1').className="winner"
      document.getElementById('cell5').className="winner"
      document.getElementById('cell9').className="winner"
      setGame(false)
    } else if (player == values[3] && player == values[5] && player == values[7]) {
      setResult(player + " is Winner ")
      winani()
      document.getElementById('cell3').className="winner"
      document.getElementById('cell5').className="winner"
      document.getElementById('cell7').className="winner"
      setGame(false)
    }else if(click>=8){
      setResult("Game Drawn")
    }
  }


  const play = (cell) => {
    if (game) {
      document.getElementById(cell).innerHTML = player
      setClick(click+1)
      disableClick(cell)
      checkWinner();
      if (player == 'O') {
        setPlayer('X')
      } else {
        setPlayer('O')
      }
    }
  }

  return (
    <>
      <div className="main">


        <h1 className="hedding">Tic Tac Toe</h1>


        <div className="game-board">
          <div className="box" id="cell1" onClick={() => { play('cell1') }}></div>
          <div className="box" id="cell2" onClick={() => { play('cell2') }}></div>
          <div className="box" id="cell3" onClick={() => { play('cell3') }}></div>
          <div className="box" id="cell4" onClick={() => { play('cell4') }}></div>
          <div className="box" id="cell5" onClick={() => { play('cell5') }}></div>
          <div className="box" id="cell6" onClick={() => { play('cell6') }}></div>
          <div className="box" id="cell7" onClick={() => { play('cell7') }}></div>
          <div className="box" id="cell8" onClick={() => { play('cell8') }}></div>
          <div className="box" id="cell9" onClick={() => { play('cell9') }}></div>
        </div>
        <p id="res">{result}</p>
        <button className="btn" onClick={() => { window.location = "/" }}>Restart</button>

      </div>
    </>
  )
}

export default App