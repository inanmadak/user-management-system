import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

it('renders the app', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  expect(container).toBeInTheDocument();
});
