import chai from 'chai'
import chunk from '../lib/chunk.js'
const expect = chai.expect

describe('chunk', () => {
  it(' The iteratee is invoked with the elements of each group.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.eql([['a', 'b'], ['c', 'd']])
  })
  it(' The iteratee is invoked with the elements of each group.', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).to.eql([['a', 'b', 'c'], ['d']])
  })

})
