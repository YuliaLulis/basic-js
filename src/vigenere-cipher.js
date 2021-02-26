const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(variant) {
    this.variant = variant;
  }

  encrypt(message, key) {

    if (!message || !key) throw Error;

    let result = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < message.length; i++, j++) {
      if (isLetter(message[i])) {
        let res = (message[i].charCodeAt() - 65 + key[j % key.length].charCodeAt() - 65) % 26;
        result += String.fromCharCode(res + 65);
      }
      else {
        result += message[i];
        j--;
      }
    }
    return this.variant !== undefined ? result.split('').reverse().join('') : result

    function isLetter(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;
    }
  }
  decrypt(encryptMessage, key) {

    if (!encryptMessage || !key) throw Error;

    let result = '';

    encryptMessage = encryptMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptMessage.length; i++, j++) {

      if (isLetter(encryptMessage[i])) {
        let res = ((encryptMessage[i].charCodeAt() - 65) - (key[j % key.length].charCodeAt() - 65) % 26);
        if (res < 0) {
          res = 26 + res;
        }
        result += String.fromCharCode(res + 65);
      }
      else {
        result += encryptMessage[i];
        j--;
      }
    }
    return this.variant === undefined ? result : result.split('').reverse().join('');

    function isLetter(letter) {
      return 65 <= letter.charCodeAt() && letter.charCodeAt() <= 90;
    }
  }
}

module.exports = VigenereCipheringMachine;
