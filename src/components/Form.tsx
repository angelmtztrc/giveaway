import { Input, Button } from '@supabase/ui';

export type FormProps = {};
const Form = ({}: FormProps) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
      className="px-8 py-10 max-w-lg bg-white rounded-md space-y-6"
    >
      <Input label="Title" descriptionText="Title or purpose of this random pick" />
      <Input.TextArea
        label="Names"
        descriptionText="A list of names, please add each name in a new line."
        rows={10}
      ></Input.TextArea>
      <div className="flex justify-center w-full">
        <Button onClick={() => {}} size={'large'} className="bg-pink-500">
          Start
        </Button>
      </div>
    </form>
  );
};

export default Form;
