import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs } from '@supabase/ui';

// contexts
import AppCtx from '../context/AppCtx';
import NamesList from './NamesList';

export type ResumeProps = {};
const Resume = ({}: ResumeProps) => {
  const { state } = useContext(AppCtx);
  const history = useHistory();

  // prevent the user for go to /resume without the initial values
  useEffect(() => {
    if (!state.title) {
      history.push('/');
    }
  }, [state, history]);

  return (
    <div className="px-8 py-10 max-w-lg bg-white rounded-md">
      <Tabs type="underlined">
        <Tabs.Panel id="participants" label="Participants">
          <NamesList />
        </Tabs.Panel>

        <Tabs.Panel id="options" label="Options">
          Tab two content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Resume;
