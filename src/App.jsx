import { useState } from 'react';
import Styles from './App.module.css';
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';

function App() {

const [calVal, setCalVa] = useState("");

const onButtonClick = (buttonText) =>{
  if(buttonText === 'c'){
  setCalVa("");
  }
  else if(buttonText === '='){
  const result = eval(calVal);
  setCalVa(result);
  }
  else{
    const newDisplayValue = calVal + buttonText;
    setCalVa(newDisplayValue)
  }
}

  return (
    <div className={Styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer 
      onButtonClick ={onButtonClick}>
      </ButtonContainer>
    </div>

  )
}

export default App
