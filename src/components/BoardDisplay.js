import React from 'react'

const BoardDisplay = (props) => {
  const { grid, activeRow, getColor } = props

  return (
    <div className='board_container'>
      {grid.map((row, indexX) => (
        <div className='row' key={indexX + 'outer'}>
          {row.map((column, indexY) => (
            <div
              className={'board_tile ' + getColor(indexX, indexY)}
              key={indexY + 'inner'}
            >
              {' '}
              {column}{' '}
            </div>
          ))}
        </div>
      ))}
    </div>
  )

  // return (
  //   <div className='board_container'>
  //     <div id={activeRow === 0 ? 'activeRow' : ''} className='row'>
  //       <div className='board_tile'>one</div>
  //       <div className='board_tile'>two</div>
  //       <div className='board_tile'>three</div>
  //       <div className='board_tile'>four</div>
  //       <div className='board_tile'></div>
  //     </div>

  //     <div className='row'>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //     </div>

  //     <div className='row'>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //     </div>

  //     <div className='row'>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //     </div>

  //     <div className='row'>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //     </div>

  //     <div className='row'>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //       <div className='board_tile'></div>
  //     </div>
  //     {/* {props.loadRows()} */}
  //   </div>
  // )
}

export default BoardDisplay
