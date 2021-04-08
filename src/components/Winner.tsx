import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// contexts
import AppCtx from '../context/AppCtx';
// components
import Spin from './Spin';

export type WinnerProps = {};
const Winner = ({}: WinnerProps) => {
  const [counter, setCounter] = useState(5);
  const { state, setWinnersAndSubstitutes } = useContext(AppCtx);
  const history = useHistory();

  useEffect(() => {
    setWinnersAndSubstitutes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // redirect to home if the user dont put data
    if (!state.title) {
      return history.push('/');
    }

    // load the spinner
    const loadSpinner = () => {
      for (let i = 0; i < counter; i++) {
        setTimeout(() => {
          setCounter(counter - 1);
        }, 1000);
      }
    };

    loadSpinner();
    return () => {};
  }, [counter, history]);

  return (
    <div className="px-8 py-10 max-w-lg bg-white rounded-md">
      {counter !== 0 ? <Spin /> : <h1>Winner!</h1>}
    </div>
  );
};

export default Winner;
