import { Profile } from './profile';

describe('Profile', () => {
  it('should create an instance', () => {
    expect(
      new Profile({
        id: 'id',
        docType: 'docType',
        userId: 'userId',
        firstName: 'firstName',
        lastName: 'lastName'
      })
    ).toBeTruthy();
  });
});
