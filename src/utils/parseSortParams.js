import {
  KEYS_OF_COLLECTION,
  SORT_ORDER_ARRAY,
} from '../constants/studentConstants.js';

export const parseSortParams = ({ sortOrder, sortBy }) => {
  const parsedSortOrder = SORT_ORDER_ARRAY.includes(sortOrder)
    ? sortOrder
    : SORT_ORDER_ARRAY[0];
  const parsedSortBy = KEYS_OF_COLLECTION.includes(sortBy)
    ? sortBy
    : KEYS_OF_COLLECTION[0];

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
