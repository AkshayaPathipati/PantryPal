import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("https://pantrypal-sbeo.onrender.com/api").then( //there might be something to tweak to make this just "/api"
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>  
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App