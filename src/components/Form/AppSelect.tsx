import { FormControl, MenuItem, Select, SelectProps } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

import { SelectOption } from './interface';

type AppSelectProps = SelectProps & { options: SelectOption[]; error?: string };

export const AppSelect: FC<AppSelectProps> = ({ name, error, required, options = [], ...props }) => {
  const [{ onChange, onBlur, value }, { error: fieldError, touched }] = useField(name!);

  return (
    <FormControl required={required} error={touched && Boolean(fieldError)} fullWidth>
      <Select name={name} value={value} onChange={onChange} onBlur={onBlur} displayEmpty>
        {options.map(({ label, ...rest }) => (
          <MenuItem key={label} {...rest}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
