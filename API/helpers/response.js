class Responses {
  static success(res, statusCode, message, data) {
    res.status(statusCode).json({
      statusCode,
      message,
      data,
    });
  }

  // eslint-disable-next-line no-dupe-class-members
  static error(res, statusCode, message) {
    res.status(statusCode).json({
      statusCode,
      message,
    });
  }
}
export default Responses;
