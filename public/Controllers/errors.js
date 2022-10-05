const errorCodes = {
  notFound: 404,
}

const errorHandler = function (errorCode) {
  let errorMessage = "Something went wrong. "

  switch (errorCode) {
    case errorCodes.notFound:
      errorMessage = "Continent or region not found"
      new NotFoundError(errorMessage)
      break

    default:
      break
  }
  return errorMessage
}

class NotFoundError extends Error {
  constructor(message) {
    super(message)

    this.name = "NotFoundError"
    this.description =
      "Error encountered fetching an API having a response with 404 status code."

    Error.captureStackTrace && Error.captureStackTrace(this, NotFoundError)
  }
}

export default errorHandler
