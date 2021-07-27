import { IsNestedPipe } from './is-nested.pipe';

describe('IsNestedPipe', () => {
  it('create an instance', () => {
    const pipe = new IsNestedPipe();
    expect(pipe).toBeTruthy();
  });
});
