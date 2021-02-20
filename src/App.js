import './App.css';
import React from 'react';

function App () {
  var initialGrid=[' ',' ',' ',' ',' ',' ',' ',' ',' '];
  const [gridValues, setGridValues] = React.useState(initialGrid)
  const [turnX, setTurnX] = React.useState(true)
  const [winner, setWinner] = React.useState(' ')
  React.useEffect(() => {
    if(gridValues[0]==gridValues[1] && gridValues[1]==gridValues[2] && gridValues[0] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[3]==gridValues[4] && gridValues[4]==gridValues[5] && gridValues[3] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[6]==gridValues[7] && gridValues[7]==gridValues[8] && gridValues[6] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[0]==gridValues[3] && gridValues[3]==gridValues[6] && gridValues[0] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[1]==gridValues[4] && gridValues[4]==gridValues[7] && gridValues[1] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[2]==gridValues[5] && gridValues[5]==gridValues[8] && gridValues[2] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[0]==gridValues[4] && gridValues[4]==gridValues[8] && gridValues[0] != ' '){
      setWinner(turnX?'O':'X');
    }
    if(gridValues[2]==gridValues[4] && gridValues[4]==gridValues[6] && gridValues[2] != ' '){
      setWinner(turnX?'O':'X');
    }
  }, [turnX]);
  return (
    <div className="App">
    <div>{winner==' '?turnX?'Player X plays next':'Player O plays next':`Winner is ${winner}`}</div>
    {winner==' '?<div className="App"> 
    <div className="row">
      <Square index="0" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} />
      <Square index="1" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} />
      <Square index="2" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} /> 
    </div>
    <div className="row">
      <Square index="3" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} />
      <Square index="4" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} />
      <Square index="5" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} /> 
    </div>
    <div className="row">
      <Square index="6" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} />
      <Square index="7" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} />
      <Square index="8" turnx={turnX} setTurnX={setTurnX} value={gridValues} toggleValue={setGridValues} /> 
    </div>
    </div> : null}
    </div>
  )
}
function Square(props){
  const handleClick = ()=>{
    if(props.value[parseInt(props.index)]==' '){
      if(props.turnx){
          var updated = props.value;
          updated[[parseInt(props.index)]]='X';
          props.toggleValue(props.value);
          props.setTurnX(false);
      }else{
          var updated = props.value;
          updated[[parseInt(props.index)]]='O';
          props.toggleValue(props.value);
          props.setTurnX(true);
      }
    }
  }
  return (<div>
    <button className="square" onClick={handleClick}>
      {props.value[parseInt(props.index)]}
    </button>
  </div>);
}

export default App
