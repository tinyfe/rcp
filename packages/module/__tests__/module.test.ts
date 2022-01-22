'use strict';

import getSomethings from '../src';

describe('module', () => {
  test('getSomethings has options', () => {
    expect(getSomethings({ name: 'Rain120' })).toBe(undefined);
  });
});
