import chai from 'chai'
import intersection from '../lib/intersection.js'
const expect = chai.expect

describe('Intersection', () => {
  it('Creates a new array of matching values from two arrays', () => {
    expect(intersection([4,2,7,5],[4,3,8,6])).to.eql([4])
  })
  it('Creates a new array of matching values from two or more arrays ', () => {
    expect(intersection([2,8,10,4],[4,3,2,6],[9,17,2,4])).to.eql([2,4])
  })
  it('Creates a new array from two arrays with multiple values matching', () => {
    expect(intersection([4,3,8,6],[4,3,6,8])).to.eql([4,3,8,6])
  })
  it('Returns an empty array if no values are matching', () => {
    expect(intersection([4,3,6,8])).to.eql([])
  })
  it('Returns an array of strings present in both arrays in the order of the first', () => {
    expect(intersection(['This','does','not','work'],['work','This','does'])).to.eql(['This','does','work'])
  })

})
