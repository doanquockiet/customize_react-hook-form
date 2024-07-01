import React, { useState, useEffect, forwardRef } from 'react';

interface InputProps {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ name, value, onChange, onBlur }, ref) => {
  const [inputValue, setInputValue] = useState(value || '');

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  return (
    <input
      name={name}
      onChange={(e) => {
        setInputValue(e.target.value);
        onChange && onChange(e);
      }}
      value={inputValue}
      onBlur={onBlur}
      ref={ref}
    />
  );
});

export default Input;
