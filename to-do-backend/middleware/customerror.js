class CustomApiError extends Error{
  constructor(message, statusCode){
    super(message);
    this.statusCode = statusCode;
  }
}

function createCustomError(msg, statusCode){
  return new CustomApiError(msg, statusCode);
}

module.exports={CustomApiError, createCustomError};