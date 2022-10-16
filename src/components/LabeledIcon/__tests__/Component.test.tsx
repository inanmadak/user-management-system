import { Info } from '@mui/icons-material';
import { render, screen } from '@testing-library/react';
import { LabeledIcon } from '../Component';

it('renders the component with text and icon', () => {
  render(<LabeledIcon label='Info' icon={<Info titleAccess='info-icon' />} />);

  expect(screen.getByText('Info')).toBeInTheDocument();
  expect(screen.getByText('info-icon')).toBeInTheDocument();
});
