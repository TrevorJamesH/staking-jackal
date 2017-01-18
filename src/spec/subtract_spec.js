import chai from 'chai'
import subtract from '../lib/subtract.js'
import R from 'ramda'
const expect = chai.expect

describe('Subtract', () => {
  it('Subtract (give the difference between two numbers)', () => {
    expect( subtract(5,3)).to.eql(2)
  })
})
