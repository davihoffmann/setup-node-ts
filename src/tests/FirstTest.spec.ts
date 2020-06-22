import { User } from '@models/User';

test('ít should be ok', () => {
  const user = new User();

  user.name = 'Davi';
  expect(user.name).toEqual('Davi');
});
