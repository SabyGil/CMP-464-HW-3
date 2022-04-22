import React from 'react'

const BoardDisplay = () => {
  let numRows = 6
  let numCols = 5

  /*
    1. put target word in state
    2. for each letter in the target word, create a box
  */
  return (
    <div className='board_container'>
      <div className='row'>
        <div className='board_tile'>1</div>
        <div className='board_tile'>2</div>
        <div className='board_tile'>3</div>
        <div className='board_tile'>4</div>
        <div className='board_tile'>5</div>
      </div>

      <div className='row'>
        <div className='board_tile'>1</div>
        <div className='board_tile'>2</div>
        <div className='board_tile'>3</div>
        <div className='board_tile'>4</div>
        <div className='board_tile'>5</div>
      </div>

      <div className='row'>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
      </div>

      <div className='row'>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
      </div>

      <div className='row'>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
      </div>

      <div className='row'>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
        <div className='board_tile'></div>
      </div>
    </div>
  )
}

export default BoardDisplay
