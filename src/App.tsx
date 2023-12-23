import React, { useState, useEffect } from 'react';
import './App.css';


function LikeButton() {
  const [count, setCoount] = useState(999)
  const handleClick = () => {
    setCoount(count + 1)
  };

  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  )
}

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        　Hi There👋👋👋
      </header>
      <body className='App-body'>
        <div className='box'>
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo"/>
        </div>
      </body>
    </div>
  );
}


export default App;
