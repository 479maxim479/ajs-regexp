import Validator from '../app';

test('Латинские буквы', () => {
  const validator = new Validator();
  const result = validator.validateUsername('Maxim');
  expect(result).toBe(true);
});

test('Кириллица', () => {
  const validator = new Validator();
  const result = validator.validateUsername('Привет');
  expect(result).toBe(false);
});

test('Начинается с тире', () => {
  const validator = new Validator();
  const result = validator.validateUsername('-user');
  expect(result).toBe(false);
});

test('Заканчивается подчеркиванием', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user_');
  expect(result).toBe(false);
});

test('Начинается с цифры', () => {
  const validator = new Validator();
  const result = validator.validateUsername('777f');
  expect(result).toBe(false);
});

test('Заканчивается цифрой', () => {
  const validator = new Validator();
  const result = validator.validateUsername('f777');
  expect(result).toBe(false);
});

test('Более трех цифр подряд', () => {
  const validator = new Validator();
  const result = validator.validateUsername('T234423new');
  expect(result).toBe(false);
});
