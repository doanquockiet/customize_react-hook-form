import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CustomController from './components/CustomController';
import Input from './components/Input'

interface FormValues {
  firstName: string;
  lastName: string;
}

const App: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  const [submittedVal, setSubmittedVal] = useState<FormValues | undefined>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    setSubmittedVal(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} placeholder="First Name" />

        <CustomController
          control={control}
          register={register}
          name="lastName"
          rules={{ required: 'Last Name is required',
            pattern: {
              //check dieu kien neu co
            }
          }}
          render={({ value, onChange, onBlur, ref }) => (
            <>
              <Input
                name="lastName"
                value={value}
                onChange={onChange} 
                onBlur={onBlur}
                ref={ref}
              />
              {errors.lastName && <p className="error">{errors.lastName.message}</p>}
            </>
          )}
        />

        <input type="submit" />
      </form>
      {submittedVal && (
        <div>
          Submitted Data:
          <br />
          {JSON.stringify(submittedVal)}
        </div>
      )}
    </div>
  );
};

export default App;
