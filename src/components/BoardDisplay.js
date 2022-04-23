import React from 'react'

const BoardDisplay = (props) => {
  let numRows = 6
  let numCols = 5

  /*
    1. put target word in state
    2. for each letter in the target word, create a box
  */
  return (
    <div className='board_container'>
      <div id={props.activeRow === 0 ? 'activeRow' : ''} className='row'>
        <div className='board_tile'>one</div>
        <div className='board_tile'>two</div>
        <div className='board_tile'>three</div>
        <div className='board_tile'>four</div>
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
      {/* {props.loadRows()} */}
    </div>
  )
}

export default BoardDisplay
