import logo from './logo.svg';
import './App.css';
import React from 'react';
import ArrowKeysReact from 'arrow-keys-react';

document.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
      case 37:
        console.log(document.getElementById('ball').getBoundingClientRect().right);
          document.getElementById('ball').style.right = document.getElementById('ball').getBoundingClientRect().right + 5; 
          //alert('left');
          break;
      case 38:
         alert('up');
          break;
      case 39:
          alert('right');
          break;
      case 40:
          alert('down');
          break;
  }
});

function App () {
  const [showButton, setShowButton] = React.useState(true)
  const buttonClick = () => setShowButton(false)
  const handleKeyDown = ()=> console.log('Down key pressed');
  return (
    <div>
    {showButton ? <button className="square" onClick={buttonClick}>Start</button> : <div id="ball" className="Golf-ball" />}
    </div>
  )
}

export default App
