import chai from 'chai'
import kebabCase from '../lib/kebabCase.js'
const expect = chai.expect

describe.only('kebabCase', () => {
  it('Returns the kebabCase string if all letters are uppercased', () => {
    expect(kebabCase('Foo Bar')).to.eql('foo-bar')
  })
  it('Returns the kebabCase string if string is kebabCase', () => {
    expect(kebabCase('FooBar')).to.eql('foo-bar')
  })
  it('Returns the kebabCase string if string is spaced with multiple dashes or spaces', () => {
    expect(kebabCase('__FOO_BAR__')).to.eql('foo-bar')
  })
})
