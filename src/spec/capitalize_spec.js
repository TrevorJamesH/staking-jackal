import chai from 'chai'
import capitalize from '../lib/capitalize.js'
const expect = chai.expect

describe('Capitalize', () => {
  it('Converts the first character of word to upper case and the remaining to lower case', () => {
    expect(capitalize("FRED")).to.eql("Fred")
  })
  it('Converts the first character of string to upper case and the remaining to lower case', () => {
    expect(capitalize("FRED IS VERY TALL")).to.eql("Fred Is Very Tall")
  })
  it('Converts the first character of string to upper case when string case is mixed', () => {
    expect(capitalize("fRED IS verY TaLl")).to.eql("Fred Is Very Tall")
  })

})
