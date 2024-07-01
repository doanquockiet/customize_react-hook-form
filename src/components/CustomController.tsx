import React from 'react';
import { useFormState, useWatch, ControllerRenderProps, FieldValues } from 'react-hook-form';

interface CustomControllerProps {
  control: any;
  register: any;
  name: string;
  rules?: any;
  render: (props: ControllerRenderProps<FieldValues, any>) => React.ReactElement;
}

const CustomController: React.FC<CustomControllerProps> = ({ control, register, name, rules, render }) => {
  const value = useWatch({ control, name });
  const { errors } = useFormState({ control, name });
  const props = register(name, rules);

  return render({
    ...props,
    value,
    onChange: (e) =>
      props.onChange({
        target: {
          name,
          value: e.target.value
        }
      }),
    onBlur: props.onBlur,
    name: props.name,
    ref: props.ref 
  });
};

export default CustomController;
