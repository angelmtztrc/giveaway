import React, { useState, useContext } from 'react';
import { Input, Button } from '@supabase/ui';
import { useHistory } from 'react-router-dom';

// context
import AppCtx from '../context/AppCtx';

export type FormProps = {};
const Form = ({}: FormProps) => {
  const [values, setValues] = useState({
    title: '',
    names: ''
  });
  const [errors, setErrors] = useState({
    title: false,
    names: false
  });

  const { setInitialValues } = useContext(AppCtx);

  const history = useHistory();

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value
    } as any);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { title, names } = values;
    const namesArray = names.split('\n');

    // validate the inputs
    if (title.trim() === '') {
      setErrors({
        ...errors,
        title: true
      });
      return;
    } else if (namesArray.length <= 0) {
      setErrors({
        ...errors,
        names: true
      });
      return;
    }

    // clear errors
    setErrors({
      title: false,
      names: false
    });
    setInitialValues(title, namesArray);

    // redirect to the /resume route
    history.push('/resume');
  };

  return (
    <form className="px-8 py-10 max-w-lg bg-white rounded-md space-y-6">
      <Input
        value={values.title}
        onChange={handleChange}
        name="title"
        label="Title"
        descriptionText="Title or purpose of this random pick"
        error={errors.title ? 'The title is required' : ''}
      />
      <Input.TextArea
        value={values.names}
        onChange={handleChange}
        name="names"
        label="Names"
        descriptionText="A list of names, please add each name in a new line."
        rows={10}
        error={errors.names ? 'The names is required' : ''}
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
