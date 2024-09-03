import React, { useEffect, useRef, useState } from 'react'

function MyComponent() {

    const ref = useRef(0)

    useEffect(() => {
        console.log("Rendered")
    })

    function handleOnClick(){
        ref.current++;
        console.log(ref.current)
    }

  return (
    <div>
        <span>{ref.current}</span>
      <button onClick={handleOnClick}>Click Me!</button>
    </div>
  )
}

export default MyComponent
