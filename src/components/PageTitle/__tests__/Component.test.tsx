import { render, screen } from '@testing-library/react';

import { PageTitle } from '../Component';

it('renders the component with text and icon', () => {
  render(<PageTitle title='Welcome!' />);

  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});
