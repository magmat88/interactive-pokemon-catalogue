import { TYPE_SET_CURRENT_ITEM_URL } from '../config/actionTypes';

export function setCurrentItemUrl(itemUrl: string) {
  return {
    type: TYPE_SET_CURRENT_ITEM_URL,
    payload: itemUrl,
  };
}
