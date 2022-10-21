import { render, screen } from '@testing-library/react';

import { userFormInitialValues } from '../../constants';
import { BareUserForm } from '../BareUserForm';

it('renders the form', () => {
  render(<BareUserForm initialValues={userFormInitialValues} onCancel={jest.fn()} onSubmit={jest.fn()} />);

  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Birthdate')).toBeInTheDocument();
  expect(screen.getByText('Select an option')).toBeInTheDocument();
  expect(screen.getByText('Cancel')).toBeInTheDocument();
  expect(screen.getByText('Save')).toBeInTheDocument();
});
