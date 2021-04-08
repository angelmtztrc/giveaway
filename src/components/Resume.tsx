import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Button } from '@supabase/ui';

// contexts
import AppCtx from '../context/AppCtx';
// components
import NamesList from './NamesList';
import Options from './Options';
import { useState } from 'react';

export type ResumeProps = {};
const Resume = ({}: ResumeProps) => {
  const { state, setOptions } = useContext(AppCtx);
  const [customOptions, setCustomOptions] = useState({
    winners: state.options.winners,
    substitutes: state.options.substitutes,
    avoidDuplicates: state.options.avoidDuplicates
  });
  const history = useHistory();

  useEffect(() => {
    // prevent the user for go to /resume without the initial values
    if (!state.title) {
      history.push('/');
    }
  }, [state, history]);

  const handleConfirm = () => {
    setOptions(customOptions);
    history.push('/winner');
  };

  return (
    <div className="px-8 py-10 max-w-lg bg-white rounded-md">
      <Tabs
        type="underlined"
        size="large"
        addOnAfter={[
          <Button onClick={handleConfirm} type="outline" size="small">
            Confirm
          </Button>
        ]}
      >
        <Tabs.Panel id="participants" label="Participants">
          <NamesList />
        </Tabs.Panel>

        <Tabs.Panel id="options" label="Options">
          <Options customOptions={customOptions} setCustomOptions={setCustomOptions} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default Resume;
