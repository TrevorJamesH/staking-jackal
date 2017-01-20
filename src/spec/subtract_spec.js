import chai from 'chai'
import subtract from '../lib/subtract.js'
const expect = chai.expect

describe('Subtract', () => {
  it('Subtract (give the difference between two numbers)', () => {
    expect( subtract(5,3)).to.eql(2)
  })
})
