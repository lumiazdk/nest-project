export class Utils {
  success(value, message = '成功') {
    return {
      code: 1,
      result: {
        ...value,
      },
      message: message,
    };
  }
  error(message = '失败') {
    return {
      code: 0,
      message: message,
    };
  }
}
