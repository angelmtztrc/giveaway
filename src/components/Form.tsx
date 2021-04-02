import React, { useState } from 'react';
import { Input, Button } from '@supabase/ui';

export type FormProps = {};
const Form = ({}: FormProps) => {
  const [values, setValues] = useState({
    title: '',
    names: ''
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value
    } as any);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(values);
    // TODO: Send to the global state
  };

  return (
    <form className="px-8 py-10 max-w-lg bg-white rounded-md space-y-6">
      <Input
        value={values.title}
        onChange={handleChange}
        name="title"
        label="Title"
        descriptionText="Title or purpose of this random pick"
      />
      <Input.TextArea
        value={values.names}
        onChange={handleChange}
        name="names"
        label="Names"
        descriptionText="A list of names, please add each name in a new line."
        rows={10}
      ></Input.TextArea>
      <div className="flex justify-center w-full">
        <Button htmlType={'submit'} onClick={handleSubmit} size={'large'} className="bg-pink-500">
          Start
        </Button>
      </div>
    </form>
  );
};

export default Form;
