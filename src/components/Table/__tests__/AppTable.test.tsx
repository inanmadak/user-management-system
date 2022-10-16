import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Condition, EngineType, VehicleState } from 'common/enum';
import { AppTable, FullConditionCell, CoordinatesCell, LongTextCell, StateCell } from '..';

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
    field: 'condition',
    headerName: 'Condition',
    renderCell: ({ value }: GridRenderCellParams) => <FullConditionCell {...value} />,
  },
  {
    field: 'state',
    headerName: 'State',
    renderCell: ({ value }: GridRenderCellParams) => <StateCell isActive={value === VehicleState.Active} />,
  },
  {
    field: 'coordinates',
    headerName: 'Coordinates',
    renderCell: ({ value }: GridRenderCellParams) => <CoordinatesCell {...value} />,
  },
];

const mockItems = [
  {
    id: 1,
    name: 'Volvo',
    model: 2011,
    about: loremIpsum,
    condition: { status: Condition.Good, energyAmount: 50, engineType: EngineType.Electric },
    state: VehicleState.Inactive,
    coordinates: { lat: 53.43434343, lng: 10.12331123 },
  },
  {
    id: 2,
    name: 'Toyota',
    model: 2019,
    about: loremIpsum,
    condition: { status: Condition.Good, energyAmount: 50, engineType: EngineType.Petrol },
    state: VehicleState.Active,
    coordinates: { lat: 53.12312125, lng: 10.32434 },
  },
];

it('renders the component with no items', () => {
  render(<AppTable columns={mockHeaders} rows={[]} columnBuffer={6} />);

  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Model')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Condition')).toBeInTheDocument();
  expect(screen.getByText('State')).toBeInTheDocument();
  expect(screen.getByText('Coordinates')).toBeInTheDocument();

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
  expect(screen.getByText('Active')).toBeInTheDocument();
  expect(screen.getByText(/53.43434343/)).toBeInTheDocument();
  expect(screen.getByText(/10.12331123/)).toBeInTheDocument();

  expect(screen.getByText('Inactive')).toBeInTheDocument();

  expect(screen.getAllByText(loremIpsum)).toHaveLength(2);
  expect(screen.getAllByText('Good condition')).toHaveLength(2);
  expect(screen.getAllByText(/MEDIUM/)).toHaveLength(2);
});
