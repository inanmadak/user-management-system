import { SelectOption } from 'components/Form/interface';

export const makeSelectOptions = <T extends { id: string; name: string }>(items: T[] = []): SelectOption[] => [
  { value: '', label: 'Select an option', disabled: true },
  ...items.map(({ id, name }) => ({ value: id, label: name })),
];
