import {useState} from 'react';

interface Props{
    initialValue?: number //Le indico que es opcional
}

export const Counter = ({ initialValue = 0 }:Props) => {

  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter( prev => prev + 1);
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
    </>
  )
}
