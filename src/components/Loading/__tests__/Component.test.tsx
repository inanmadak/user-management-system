import { render, screen } from '@testing-library/react';
import { Loading } from '../Component';

it('renders the component with text and icon', () => {
  render(<Loading />);

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
