import chai from 'chai'
import sort from '../lib/sort.js'
const expect = chai.expect

describe('Sort', () => {
  it('Sorts the array values in ascending order', () => {
    expect(sort([4,2,7,5])).to.eql([2, 4, 5, 7])
  })
  it('returns a new array', () => {
    let inputArray = [2, 4, 5, 7]
    expect(sort(inputArray)).not.to.equal(inputArray)
  })
})
