import React, { useContext } from 'react';
import { InputNumber, Checkbox } from '@supabase/ui';

// contexts
import AppCtx from '../context/AppCtx';

export type OptionsProps = {
  customOptions: {
    winners: number;
    substitutes: number;
    avoidDuplicates: boolean;
  };
  setCustomOptions: Function;
};
const Options = ({ customOptions, setCustomOptions }: OptionsProps) => {
  const { state } = useContext(AppCtx);
  const { names } = state;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCustomOptions({
      ...customOptions,
      [e.currentTarget.name]:
        e.currentTarget.name === 'avoidDuplicates'
          ? Boolean(e.currentTarget.checked)
          : parseInt(e.currentTarget.value, 10)
    } as any);
  };

  return (
    <div className="mt-4 space-y-6">
      <InputNumber
        name="winners"
        label="Winners count"
        descriptionText="The number of winners you want to have"
        value={customOptions.winners}
        onChange={handleChange}
        min={1}
        max={names.length - 1}
      ></InputNumber>
      <InputNumber
        name="substitutes"
        label="Substitutes count"
        descriptionText="The number of substitutes you want to have"
        value={customOptions.substitutes}
        onChange={handleChange}
        min={1}
        max={names.length - customOptions.winners}
      ></InputNumber>
      <Checkbox
        name="avoidDuplicates"
        checked={customOptions.avoidDuplicates}
        onChange={handleChange}
        label="Prevent duplicates"
        description="Avoid duplicates names in the list"
      />
    </div>
  );
};

export default Options;
