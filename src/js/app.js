export default class Validator {
  validateUsername(username) {
    this.username = username;
    return !/[^\w-]/.test(username) && !/^[\d-_]|[\d-_]$/.test(username) && !/\d{4}/.test(username);
  }
}
