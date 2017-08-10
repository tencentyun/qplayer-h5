import util from 'util'

class QPlayerError {
  constructor(message) {
    this.name = this.constructor.name;
    this.message = message || '';

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

util.inherits(QPlayerError, Error);

export default QPlayerError;