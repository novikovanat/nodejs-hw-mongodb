export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const phoneNumberRegex = /^[+]?[1-9]\d{1,14}$/;
export const CONTACTS_TYPE = ['personal', 'work', 'home'];
export const DEFAULT_CONTACTS_TYPE = 'personal';
export const KEYS_OF_COLLECTION = [
  '_id',
  'name',
  'phoneNumber',
  'email',
  'contactType',
  'isFavourite',
  'createdAt',
  'updatedAt',
];
export const SORT_ORDER_ARRAY = ['asc', 'desc'];

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
