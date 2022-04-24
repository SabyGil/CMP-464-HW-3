import React from 'react'

const Keypad = (props) => {
  const { handleChange, handleDelete, handleEnter } = props
  // boilerplate table header functional component
  // const handleChange = handleChange;

  // MAKE HANDLE CLICK AND HANDLE KEY PRESS FUNCTIONS
  return (
    <div className='keypad_container'>
      <div className='kb_row'>
        <button data-key='q' onClick={handleChange}>
          q
        </button>
        <button data-key='w' onClick={handleChange}>
          w
        </button>
        <button data-key='e' onClick={handleChange}>
          e
        </button>
        <button data-key='r' onClick={handleChange}>
          r
        </button>
        <button data-key='t' onClick={handleChange}>
          t
        </button>
        <button data-key='y' onClick={handleChange}>
          y
        </button>
        <button data-key='u' onClick={handleChange}>
          u
        </button>
        <button data-key='i' onClick={handleChange}>
          i
        </button>
        <button data-key='o' onClick={handleChange}>
          o
        </button>
        <button data-key='p' onClick={handleChange}>
          p
        </button>
      </div>
      <div className='kb_row'>
        <div className='indent'></div>
        <button data-key='a' onClick={handleChange}>
          a
        </button>
        <button data-key='s' onClick={handleChange}>
          s
        </button>
        <button data-key='d' onClick={handleChange}>
          d
        </button>
        <button data-key='f' onClick={handleChange}>
          f
        </button>
        <button data-key='g' onClick={handleChange}>
          g
        </button>
        <button data-key='h' onClick={handleChange}>
          h
        </button>
        <button data-key='j' onClick={handleChange}>
          j
        </button>
        <button data-key='k' onClick={handleChange}>
          k
        </button>
        <button data-key='l' onClick={handleChange}>
          l
        </button>
        <div className='indent'></div>
      </div>
      <div className='kb_row last_row'>
        <button data-key='↵' onClick={handleEnter}>
          ENTER
        </button>
        <button data-key='z' onClick={handleChange}>
          z
        </button>
        <button data-key='x' onClick={handleChange}>
          x
        </button>
        <button data-key='c' onClick={handleChange}>
          c
        </button>
        <button data-key='v' onClick={handleChange}>
          v
        </button>
        <button data-key='b' onClick={handleChange}>
          b
        </button>
        <button data-key='n' onClick={handleChange}>
          n
        </button>
        <button data-key='m' onClick={handleChange}>
          m
        </button>
        <button data-key='Backspace' onClick={handleDelete}>
          BKSP
        </button>

        {/* need handle delete function
            // backspace keycode = 8
            // enter keycode = 13
          */}
      </div>
    </div>
  )
}

export default Keypad
