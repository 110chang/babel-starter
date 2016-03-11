
'use strict';

//Spec file sample

var Clazz = require('../src/clazz.js');

function* greet() {
  yield 'generator';
  yield 'works';
  yield 'fine!';
}

describe('Sample', () => {

  beforeEach(() => {
    jasmine.getFixtures().fixturesPath = 'base/fixtures';
  });

  it('can use classes', () => {
    let clazz = new Clazz();
    expect(clazz.works()).toBe('fine!');
  });

  it('can use generator', () => {
    let greeter = greet();
    expect(greeter.next().value).toBe('generator');
    expect(greeter.next().value).toBe('works');
    expect(greeter.next().value).toBe('fine!');
    expect(greeter.next().done).toBeTruthy();
  });

  it('can use fixtures', () => {
    let fixture = readFixtures('fixture.json');
    expect(fixture).toBe('[{"this":"is","a":"json","fixture":"!"}]')
  });
});


