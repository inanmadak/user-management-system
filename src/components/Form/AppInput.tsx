import { FormControl, TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

type InputProps = TextFieldProps & { error?: string };

export const AppInput: FC<InputProps> = ({ name, error, required, ...props }) => {
  const [{ onChange, onBlur, value }, { error: fieldError, touched }] = useField(name!);

  return (
    <FormControl required={required} fullWidth>
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={touched && fieldError}
        error={touched && Boolean(fieldError)}
        {...props}
      />
    </FormControl>
  );
};
