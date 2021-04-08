import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Badge } from '@supabase/ui';
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
      {counter !== 0 ? (
        <Spin />
      ) : (
        <div className="text-center">
          <Typography.Title level={2}>{state.title}</Typography.Title>
          <div className="flex items-center justify-between mt-5 text-left">
            <ul>
              {state.winners.map((name: string) => (
                <li key={name}>
                  {name} <Badge color="pink">Winner</Badge>{' '}
                </li>
              ))}
            </ul>
            <ul>
              {state.substitutes.map((name: string) => (
                <li key={name}>
                  {name} <Badge color="purple">Substitute</Badge>{' '}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Winner;
