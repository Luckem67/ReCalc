import './App.css';
import { Button } from './components/button';
import {ClearButton} from './components/clearButton';
import logo from './img/recalc-logo.png';
import Input from './components/input';
import { useState }  from 'react';
import { evaluate } from 'mathjs';



function App() {

  const[input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const result = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert('Por favir ingrese los valores para realizar los calculos');
    }
   
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logo}
          alt='Logo de freCodeCamp' />
      </div>
      <div className= 'contenedor-calculadora'>
        <Input input={input} />
        <div className= 'fila'>
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className= 'fila'>
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className= 'fila'>
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className= 'fila'>
          <Button manejarClick={result}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ClearButton manejarClear={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
