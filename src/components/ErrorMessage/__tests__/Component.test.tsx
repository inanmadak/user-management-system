import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../Component';

it('renders the component with error message', () => {
  render(<ErrorMessage message='An error occured' />);

  expect(screen.getByText('An error occured')).toBeInTheDocument();
});
