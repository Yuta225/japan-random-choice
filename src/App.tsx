import React, { useState, useEffect } from 'react';
import './App.css';


function LikeButton() {
  const [count, setCoount] = useState(999)
  const handleClick = () => {
    setCoount(count + 1)
  };

  // useEffect (() => {
  //   alert("いいねが押されました")
  // },[count])

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
        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo"/>
      </body>
    </div>
  );
}


export default App;
