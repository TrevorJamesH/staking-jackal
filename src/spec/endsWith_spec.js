import chai from 'chai'
import endsWith from '../lib/endsWith.js'
const expect = chai.expect

describe('endsWith', () => {
  it('Converts the first character of word to upper case and the remaining to lower case', () => {
    expect(endsWith('abc', 'c')).to.eql(true)
  })
  it('Converts the first character of string to upper case and the remaining to lower case', () => {
    expect(endsWith('abc', 'b')).to.eql(false)
  })
  it('Converts the first character of string to upper case when string case is mixed', () => {
    expect(endsWith('abc', 'b', 2)).to.eql(true)
  })

})
