export const Code = {
  SUCCESS: {
    code: 200,
    msg: 'success',
  },
  ERROR(error) {
    return {
      code: 500,
      msg: error.message,
    };
  },
  NORMAL_ERROR(msg) {
    return {
      code: 500,
      msg,
    };
  },
};
