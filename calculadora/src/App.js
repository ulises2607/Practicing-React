import './App.css';
import Logo from './Imagenes/logo.svg'
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonCLear from './Componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)
  }

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    }else {
      alert('Por favor ingresa valores para analizar resultados')
    }
    
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        src={Logo}
        className='logo'
        alt='Logo de app' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonCLear manejarClear={() => setInput('')}>
            Clear
            </BotonCLear>
        </div>
      </div>
    </div>
  );
}

export default App;
