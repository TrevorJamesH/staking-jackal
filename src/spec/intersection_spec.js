import chai from 'chai'
import intersection from '../lib/intersection.js'
const expect = chai.expect

describe('Intersection', () => {
  it('Creates an array of unique values that are included in all given arrays', () => {
    expect(intersection([4,2,7,5],[4,3,8,6])).to.eql([4])
  })
  it('Creates an array of unique values that are included in all given arrays', () => {
    expect(intersection([6,10,7],[4,3,8,6])).to.eql([6])
  })
  it('Creates an array of unique values that are included in all given arrays', () => {
    expect(intersection([8,10],[4,3,6])).to.eql([])
  })
  it('Creates an array of unique values that are included in all given arrays', () => {
    expect(intersection([4,3,8,6],[4,3,6,8])).to.eql([4,3,8,6])
  })
})
