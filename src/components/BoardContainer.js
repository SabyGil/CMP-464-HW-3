import React from 'react'

import BoardDisplay from './BoardDisplay'
import Keypad from './Keypad'

//
const getDefaultBoard = () => [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: getDefaultBoard(),
      activeRow: 0,
      openSpotInBoard: 0,
      targetWord: ['h', 'e', 'l', 'l', 'o'], // pre-filled word used to test app
      currWord: [],
      cellContent: '',
      gameOver: false, // to be used in future refactor
    }
  }

  // Used to handle keyboard input
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  // Used to handle screen keyboard input
  handleOnScreenKB(e) {
    let enteredKey = e.target.dataset.key
    // console.log(enteredKey, 'handlechange')
    this.handleKeyPress({ key: enteredKey })
    // Blur is needed so that screen keys lose focus if transitioning to using keyboard
    e.target.blur()
  }

  // Handler for when the "delete" key is pressed
  handleDelete = (e) => {
    if (this.state.gameOver) {
      return
    }
    e.target?.blur() // e.target.blur && e.target.blur()

    // missing event parameter
    if (this.state.openSpotInBoard > 0) {
      let lastSpotIndex = this.state.openSpotInBoard - 1
      // console.log(this.state.openSpotInBoard + ' val of open spot')
      // console.log(this.state.rowNodes + ' the row nodes')

      this.setState((prevState) => {
        const { board, activeRow } = this.state
        board[activeRow][lastSpotIndex] = ''

        return {
          currWord: prevState.currWord.filter((_, i) => i !== lastSpotIndex),
          board: board,
          openSpotInBoard: lastSpotIndex,
        }
      })
      // console.log(this.state.openSpotInBoard)
    }
  }

  // Handler for when the "enter" key is pressed
  handleEnter = (e) => {
    if (this.state.gameOver) {
      return
    }

    e.target?.blur() // e.target.blur && e.target.blur()

    const target = this.state.targetWord.join('')
    const word = this.state.currWord.join('')

    if (word.length === 5) {
      // Logic for last row
      if (this.state.activeRow === 5) {
        console.log('GAMEOVER')
        this.setState({ gameOver: true })
      }
      this.setState({
        activeRow: this.state.activeRow + 1,
        openSpotInBoard: 0,
        currWord: [],
      })
    } else {
      console.log('not complete')
    }
  }

  handleKeyPress = (e) => {
    if (this.state.gameOver) {
      return
    }
    e.target?.blur()

    // Regex cheatsheet (summary: match single letter strings)
    // ^ = beginning of string
    // [] = character class
    // $ = end of string
    // i = a regex flag (case insensitive)
    const patt = new RegExp('^[a-z]$', 'i')
    const validLetter = e.key.search(patt) !== -1
    console.debug('isValid:', validLetter, e.key)

    if (e.key === 'Backspace') {
      this.handleDelete(e)
    } else if (e.key === 'Enter') {
      this.handleEnter(e)
    } else if (validLetter && this.state.openSpotInBoard < 5) {
      this.addLetter(e.key)
    }
  }

  //
  addLetter(letter) {
    const { board, activeRow, openSpotInBoard } = this.state
    board[activeRow][openSpotInBoard] = letter

    this.setState((prevState, props) => ({
      currWord: [...prevState.currWord, letter],
      board: board,
      openSpotInBoard: prevState.openSpotInBoard + 1,
    }))
  }

  getColor(x, y) {
    const targetWord = this.state.targetWord.join('')
    const wordInputByUser = this.state.board[x].join('')

    const isLetterPositionCorrect = wordInputByUser[y] === targetWord[y]
    const isLetterInWord = targetWord.includes(wordInputByUser[y])

    // if user has hit enter, the index of the current row (x) will be smaller than the active row
    const hasUserMovedToTheNextRow = x < this.state.activeRow

    if (isLetterPositionCorrect && hasUserMovedToTheNextRow) {
      return 'green'
    } else if (isLetterInWord && hasUserMovedToTheNextRow) {
      return 'yellow'
    }

    return ''
  }

  render() {
    return (
      <div className='game_container'>
        <BoardDisplay
          activeRow={this.state.activeRow}
          grid={this.state.board}
          getColor={(x, y) => this.getColor(x, y)}
        />
        <Keypad
          handleChange={(e) => this.handleOnScreenKB(e)}
          handleDelete={(e) => this.handleDelete(e)}
          handleEnter={(e) => this.handleEnter(e)}
        />
      </div>
    )
  }
}

/*
Notes used while developing:

1. generate the board. each row has 5 boxes. there are 6 rows
2. board will be a 2 dimensional array. A activeRow variable
will keep track of which row the user is on and which to check when the user
presses enter
*/

export default BoardContainer
