import get from 'lodash/get';

/**
 * Get a formatted value for a prop based on its type.
 * @param prop
 * @param valueToGet
 */
export const getValueFromProp = (prop: any, valueToGet: string) => {
  if (!Array.isArray(prop)) {
    return get(prop, valueToGet, '');
  }

  return prop.map(propItem => get(propItem, valueToGet, '')).join(', ');
};

export const formatDate = (dateValue: string) => {
  if (!dateValue) {
    return '-';
  }

  return new Date(dateValue).toLocaleString();
};
