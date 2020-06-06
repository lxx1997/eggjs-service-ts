
import EicUser from '../model/eic-user';
module.exports = {
  LoginResult: {
    code: {
      type: 'number',
    },
    msg: {
      type: 'string',
    },
    token: {
      type: 'string',
    },
  },
  RegisterResult: {
    code: {
      type: 'number',
    },
    data: {
      type: 'string',
      itemType: EicUser,
    },
    msg: {
      type: 'string',
    },
  },
  userUpdateResult: {
    code: {
      type: 'number',
    },
    data: {
      type: 'string',
      itemType: EicUser,
    },
    msg: {
      type: 'string',
    },
  },
};
