import React from 'react'

import BoardDisplay from './BoardDisplay'
import Keypad from './Keypad'

// console.log(Array(5).fill(0))
// window.addEventListener('keypress', (e) => {
//   console.log(e.key)
// })
class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRow: 0,
      targetWord: [],
      openSpotInBoard: 0,
      currWord: [],
      rowNodes: {},
      cellContent: '',
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)

    let nodes = document.querySelector('#activeRow')
    this.setState((prevState) => {
      prevState.rowNodes = nodes
    })
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress)
  }

  handleChange(e) {
    let temp = e.target.dataset.key
    console.log(temp, 'handlechange')
    document.activeElement.blur()
  }

  handleDelete = () => {
    // missing event parameter
    if (this.state.openSpotInBoard > 0) {
      // let lastRowGridInput =
      //   this.state.rowNodes.childNodes[this.state.openSpotInBoard - 1].innerHTML
      let lastSpotIndex = this.state.openSpotInBoard - 1
      console.log(this.state.openSpotInBoard + ' val of open spot')
      console.log(this.state.rowNodes + ' the row nodes')

      // this.state.rowNodes.childNodes[lastSpotIndex].innerHTML = ''

      this.setState((prevState) => {
        // currWord: [...prevState.currWord, e.key],
        // rowNodes: {...prevState.rowNodes}
        let { rowNodes } = prevState
        rowNodes.childNodes[this.state.openSpotInBoard - 1].innerHTML = ''
        return {
          currWord: prevState.currWord.filter(
            (letter, i) => i === lastSpotIndex
          ),
          rowNodes: rowNodes,
          openSpotInBoard: lastSpotIndex,
        }
      })
      console.log(this.state.openSpotInBoard)

      // lastRowGridInput = ''
    }
  }

  handleEnter = (e) => {}

  getNextRow() {
    let t = this.state.rowNodes.nextSibling
    console.log(t)
  }

  handleKeyPress = (e) => {
    if (e.key === 'Backspace') {
      this.handleDelete()
    }
    if (this.state.openSpotInBoard < 5 && e.key !== 'Backspace') {
      let rowNodes = this.state.rowNodes
      rowNodes.childNodes[this.state.openSpotInBoard].innerHTML = e.key

      this.setState((prevState, props) => ({
        currWord: [...prevState.currWord, e.key], //used for target word validation later
        // cellContent: e.key,
        // cellContent: prevState.cellContent.concat(e.key),
        openSpotInBoard: prevState.openSpotInBoard + 1,
      }))
      // rowNodes.childNodes[this.state.openSpotInBoard].innerHTML =
      //   e.key

      // console.log(this.state.cellContent)
    }
  }
  render() {
    // console.log(this.state)
    return (
      <div className='game_container'>
        <BoardDisplay activeRow={this.state.activeRow} />
        <Keypad
          handleChange={(e) => this.handleChange(e)}
          handleKeyPress={(e) => this.handleKeyPress(e)}
          handleDelete={() => this.handleDelete()}
          // handleDelete={this.handleDelete()}
        />
      </div>
    )
  }
}

/*
1. generate the board. each row has 5 boxes. there are 6 rows
2. board will be a 2 dimensional array. A activeRow variable
will keep track of which row the user is on and which to check when the user
presses enter

* on app load, store target guess word
* have an array of words that will function as the word db

https://stackoverflow.com/questions/19544452/remove-last-item-from-array#:~:text=To%20remove%20the%20last%20n,array%20containing%20the%20removed%20elements.
*/

export default BoardContainer
