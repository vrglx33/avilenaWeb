import { formatDate, getValueFromProp } from './api.utils';

describe('API Utils', () => {
  it('format date', () => {
    const date = formatDate('12/05/2019');
    expect(date).toBe('12/5/2019, 12:00:00 AM');
  });

  it('return default date value', () => {
    // @ts-ignore
    expect(formatDate()).toBe('-');
  });
  it('Get value from json', () => {
    expect(getValueFromProp({ prop: 'this is a prop' }, 'prop')).toBe(
      'this is a prop'
    );
  });
  it('Get non existent value from json', () => {
    expect(getValueFromProp({ prop: 'this is a prop' }, 'other')).toBe('');
  });
});
