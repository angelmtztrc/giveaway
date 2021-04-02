import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppCtx from '../context/AppCtx';

export type ResumeProps = {};
const Resume = ({}: ResumeProps) => {
  const { state } = useContext(AppCtx);
  const history = useHistory();

  useEffect(() => {
    if (!state.title) {
      history.push('/');
    }
  }, [state, history]);
  return (
    <div className="px-8 py-10 max-w-lg bg-white rounded-md">
      <p>Hello World!</p>
    </div>
  );
};

export default Resume;
