const errorCodes = {
  notFound: 404,
}

const errorHandler = function (errorCode) {
  let errorMessage = "Something went wrong. "

  switch (errorCode) {
    case errorCodes.notFound:
      errorMessage = "Country not found"
      break

    default:
      break
  }
  return errorMessage
}

export class ForbiddenError extends Error {
  constructor(message) {
    super(message)

    this.name = "ForbiddenError"
    this.description =
      "Error encountered fetching an API having a response with 403 status code."

    Error.captureStackTrace && Error.captureStackTrace(this, ForbiddenError)
  }
}

export class NotFoundError extends Error {
  constructor(message) {
    super(message)

    this.name = "NotFoundError"
    this.description =
      "Error encountered fetching an API having a response with 404 status code."

    Error.captureStackTrace && Error.captureStackTrace(this, NotFoundError)
  }
}
