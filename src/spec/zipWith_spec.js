import chai from 'chai'
import zipWith from '../lib/zipWith.js'
const expect = chai.expect

describe('zipWith', () => {
  it(' The iteratee is invoked with the elements of each group.', () => {
    expect(zipWith([1, 2], [10, 20], [100, 200])).to.eql([111, 222])
  })

})
