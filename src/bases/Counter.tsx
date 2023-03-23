import {useState} from 'react';

export const Counter = (initialValue:number) => {

  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter( prev => prev + 1);
  }

  const handleRestar = () => {
    setCounter( prev => prev - 1 );
  }

  const handleCero = () => {
    setCounter(0);
  }

  return (
    <>
        <h1>Counter: { counter }</h1>

        <button 
            className='btn btn-primary mr-2'
            onClick={handleClick}
        >
            +1
        </button>
        <button 
            className='btn btn-primary mr-2'
            onClick={handleRestar}
        >
            -1
        </button>
        <button 
            className='btn btn-primary mr-2'
            onClick={handleCero}
        >
            0
        </button>
        
    </>
  )
}
