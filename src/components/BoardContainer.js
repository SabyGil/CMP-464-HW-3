import React from 'react'

import BoardDisplay from './BoardDisplay'
import Keypad from './Keypad'

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='game_container'>
        <BoardDisplay />
        <Keypad />
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
