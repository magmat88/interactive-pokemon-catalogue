import { TYPE_SET_CURRENT_LIST_URL } from '../config/actionTypes';

export function setCurrentListUrl(listUrl: string) {
  return {
    type: TYPE_SET_CURRENT_LIST_URL,
    payload: listUrl,
  };
}
