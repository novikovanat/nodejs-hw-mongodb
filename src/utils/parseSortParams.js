import {
  KEYS_OF_COLLECTION,
  SORT_ORDER_ARRAY,
} from '../constants/contactConstants.js';
import { parsedOrFirst } from './parsedOrFirst.js';

export const parseSortParams = ({ sortOrder, sortBy }) => {
  const parsedSortOrder = parsedOrFirst(sortOrder, SORT_ORDER_ARRAY);
  const parsedSortBy = parsedOrFirst(sortBy, KEYS_OF_COLLECTION);
  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
