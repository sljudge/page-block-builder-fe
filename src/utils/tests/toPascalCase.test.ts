import toPascalCase from '../toPascalCase';

describe('toPascalCase', () => {
  it('is handles spaces', () => {
    expect(toPascalCase('a React component')).toBe('AReactComponent');
  });
  it('is handles hyphens', () => {
    expect(toPascalCase('a-react-component')).toBe('AReactComponent');
  });
  it('is handles underscores', () => {
    expect(toPascalCase('a_react_component')).toBe('AReactComponent');
  });
});
