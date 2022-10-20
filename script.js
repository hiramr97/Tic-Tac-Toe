const status = document.querySelector(".status")
let isGameActive = true
let currentPlayer = "X"
let board = ["", "", "", "", "", "", "", "", ""]
const win = ("Player " + currentPlayer + " has won!")
const tie = ("It's a tie!")
const whosTurn = ("It's " + currentPlayer + "'s turn")

console.log(whosTurn)
