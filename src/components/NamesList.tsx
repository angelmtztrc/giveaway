import { useContext } from 'react';
import { Badge, Button, IconRefreshCcw } from '@supabase/ui';
import AppCtx from '../context/AppCtx';

export type NamesListProps = {};
const NamesList = ({}: NamesListProps) => {
  const { state, setMessedValues } = useContext(AppCtx);
  const { names } = state;

  // disorder the names array
  const handleClick = () => {
    setMessedValues();
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <Badge>{`${names.length} participants`}</Badge>
        <Button
          onClick={handleClick}
          size="small"
          icon={<IconRefreshCcw />}
          className="bg-pink-500"
        ></Button>
      </div>
      <ul className="ml-2 max-h-96 overflow-y-auto space-y-2">
        {names.map((item: string, index: number) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesList;
