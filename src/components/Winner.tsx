import { useState, useEffect } from 'react';

// components
import Spin from './Spin';

export type WinnerProps = {};
const Winner = ({}: WinnerProps) => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    // redirect to home if the user dont put data
    // load the spinner
    const loadSpinner = () => {
      for (let i = 0; i < counter; i++) {
        setTimeout(() => {
          setCounter(counter - 1);
        }, 1000);
      }
    };

    loadSpinner();
  }, [counter]);

  return (
    <div className="px-8 py-10 max-w-lg bg-white rounded-md">
      {counter !== 0 ? <Spin /> : <h1>Winner!</h1>}
    </div>
  );
};

export default Winner;
