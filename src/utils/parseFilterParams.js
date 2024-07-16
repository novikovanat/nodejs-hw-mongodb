
import { CONTACTS_TYPE } from '../constants/contactConstants.js';
import { parsedOrFirst } from './parsedOrFirst.js';

const parseType = (type) => {
  if (type !== undefined) {
    return parsedOrFirst(type, CONTACTS_TYPE);
  }
  return;
};

const parseisFavourite = (isFavourite) => {
  if (isFavourite !== undefined) {
    return isFavourite !== 'true' ? false : true;
  }
  return;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;
  const parsedType = parseType(type);
  const parsedIsFavourite = parseisFavourite(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
