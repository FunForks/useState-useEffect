import React from 'react'

function Example({renders, myState, action}) {
  return (
    <div
      id='example'
      onClick={action}>
        <h1>Click me</h1>
        <p>renders: {renders}</p>
        <p>myState: {myState}</p>
    </div>
  )
}

export default Example