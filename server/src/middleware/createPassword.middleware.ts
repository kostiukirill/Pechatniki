import bcrypt from 'bcrypt';
export const createRandomPassword = (): string => {
  const length = 10;
  const letters = 6;
  const numbers = 2;
  const symbols = 2;
  const engLettersArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const symsReg = /^@#%&-/g;
  const lettersReg = /^a-zA-Zа-яА-Я/g;
  const numbersReg = /^0-9/g;
  const lettersArr = [
    ...engLettersArr,
    ...engLettersArr.map((a) => a.toUpperCase()),
  ];
  const passwordArr: Array<string> = [];
  while (passwordArr.length < length) {
    if (
      !passwordArr.join('').match(lettersReg) ||
      passwordArr.join('').match(lettersReg).length < letters
    ) {
      const ranIndex = Math.floor(Math.random() * lettersArr.length);
      passwordArr.push(lettersArr[ranIndex]);
    }
    if (
      !passwordArr.join('').match(numbersReg) ||
      passwordArr.join('').match(numbersReg).length < numbers
    ) {
      passwordArr.push(Math.floor(Math.random() * 9).toString());
    }
  }
  return passwordArr.join('');
};

createRandomPassword();
