import {useState} from 'react';

interface Props{
    initialValue?: number //Le indico que es opcional
}

export const CounterBy = ({ initialValue = 5 }:Props) => {

  const [counterState, setCounter] = useState({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = (value: number) => {
    //setCounter( prev.counter => prev.counter + 1);
    setCounter(  prev => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1
    }) );
  }
  

  return (
    <>
        <h1>CounterBy: { counterState.counter }</h1>
        <h1>Clicks: { counterState.clicks }</h1>

        <button 
            className='btn btn-primary mr-2'
            onClick={() => handleClick(1)}
        >
            +1
        </button>
        <button 
            className='btn btn-primary mr-2'
            onClick={() => handleClick(5)}
        >
            +5
        </button>
    </>
  )
}
