export const makeSelectOptions = <T extends { id: string; name: string }>(items: T[] = []) =>
  [{ value: '', label: 'Select an option' }].concat(items.map(({ id, name }) => ({ value: id, label: name })));
