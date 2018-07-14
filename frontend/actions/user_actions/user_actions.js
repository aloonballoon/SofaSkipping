import * as SessionApiUtil from '../../util/users_util';
import { receiveCurrentUser } from '../session_actions';

export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";


export const updateStatus = (user) => {
  return dispatch => {
    return SessionApiUtil.updateStatus(user).then((updated_user) => {
      return dispatch(receiveCurrentUser(updated_user));
    });
  };
};
