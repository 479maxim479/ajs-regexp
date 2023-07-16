import Validator from '../app';

test('Содержит латинские буквы', () => {
  const validator = new Validator();
  const result = validator.validateUsername('Maxim');
  expect(result).toBe(true);
});

test('Содержит кириллицу', () => {
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
  const result = validator.validateUsername('user7');
  expect(result).toBe(false);
});

test('Содержит более трех цифр подряд', () => {
  const validator = new Validator();
  const result = validator.validateUsername('T234423new');
  expect(result).toBe(false);
});
