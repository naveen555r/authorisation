import React from 'react'

function Hoc(props) {
    const newstyle={
        background:'lightgrey'
    }
  return (
    <div style={newstyle}>
        {props.children}

    </div>
  )
}

export default Hoc