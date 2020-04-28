import { Document } from './document';

describe('Document', () => {
  it('should create an instance', () => {
    expect(new Document('id', 'doctype')).toBeTruthy();
  });
});
