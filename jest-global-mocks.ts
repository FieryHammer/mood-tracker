// Global mocks for JSDOM
// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom

Object.defineProperty(window, 'CSS', { value: undefined });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    display: 'none',
    appearance: ['-webkit-appearance'],
    getPropertyValue: () => ''
  })
});

Object.defineProperty(window, 'matchMedia', {
  value: (query: any) => ({
    matches: false,
    media: query,
    onchange: null as any,
    addListener: () => {},
    removeListener: () => {}
  })
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => ({
    enumerable: true,
    configurable: true
  })
});
