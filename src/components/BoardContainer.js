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
    // console.log(temp, 'handlechange')
    document.activeElement.blur()
  }

  handleDelete = (e) => {}

  handleEnter = (e) => {}

  getNextRow() {
    let t = this.state.rowNodes.nextSibling
    console.log(t)
  }

  handleKeyPress = (e) => {
    // if (e.key === 'enter') {
    //   console.log('enter press here! ')
    // }

    if (this.state.openSpotInBoard < 5) {
      let rowNodes = this.state.rowNodes
      rowNodes.childNodes[this.state.openSpotInBoard].innerHTML = e.key

      this.setState((prevState, props) => ({
        currWord: [...prevState.currWord, e.key],
        openSpotInBoard: prevState.openSpotInBoard + 1,
      }))
    }
  }
  render() {
    return (
      <div className='game_container'>
        <BoardDisplay activeRow={this.state.activeRow} />
        <Keypad
          handleChange={(e) => this.handleChange(e)}
          handleKeyPress={(e) => this.handleKeyPress(e)}
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
*/

export default BoardContainer
