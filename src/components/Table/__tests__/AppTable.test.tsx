import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AppTable, LongTextCell, DateCell } from '..';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

const mockHeaders: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
  },
  {
    field: 'model',
    headerName: 'Model',
  },
  {
    field: 'about',
    headerName: 'About',
    width: 100,
    renderCell: ({ value }: GridRenderCellParams) => <LongTextCell title={value}>{value}</LongTextCell>,
  },
  {
    field: 'productionDate',
    headerName: 'Production date',
    renderCell: ({ value }: GridRenderCellParams) => <DateCell date={value} />,
  },
];

const mockItems = [
  {
    id: 1,
    name: 'Volvo',
    model: 2011,
    about: loremIpsum,
    productionDate: new Date(2011, 7, 1),
  },
  {
    id: 2,
    name: 'Toyota',
    model: 2019,
    about: loremIpsum,
    productionDate: new Date(2019, 2, 1),
  },
];

it('renders the component with no items', () => {
  render(<AppTable columns={mockHeaders} rows={[]} columnBuffer={6} />);

  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Model')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Production date')).toBeInTheDocument();

  expect(screen.getByText('No rows')).toBeInTheDocument();
});

it('renders the component with items', () => {
  render(
    <MemoryRouter>
      <AppTable columns={mockHeaders} rows={mockItems} columnBuffer={6} />
    </MemoryRouter>,
  );

  expect(screen.getByText('Volvo')).toBeInTheDocument();
  expect(screen.getByText('2011')).toBeInTheDocument();
  expect(screen.getByText('Toyota')).toBeInTheDocument();
  expect(screen.getByText('2019')).toBeInTheDocument();
  expect(screen.getByText('Aug 1, 2011')).toBeInTheDocument();
  expect(screen.getByText('Mar 1, 2019')).toBeInTheDocument();

  expect(screen.getAllByText(loremIpsum)).toHaveLength(2);
});
