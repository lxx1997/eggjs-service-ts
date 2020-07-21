
import EicUser from '../model/eic-user';
import EicNovel from '../model/eic-novel';
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
  // pages: {
  //   page: {
  //     type: 'number',
  //   },
  //   pageSize: {
  //     type: 'number',
  //   },
  //   total: {
  //     type: 'total',
  //   },
  //   list: {
  //     type: 'array',
  //     itemType: EicNovel,
  //   },
  // },
};
