import chai from 'chai'
import _ from 'lodash'
import flatten from '../lib/flatten.js'
const expect = chai.expect

describe('Flatten', () => {
  it('Flattens the array', () => {
    expect(flatten([[4,2,7,5]])).to.eql([4,2,7,5])
  })
  it('Flattens the array', () => {
    expect(flatten([4,[2,7],5])).to.eql([4, 2, 7, 5])
  })

  it('Flattens the array', () => {
    expect(flatten([ 4, [ 2, [ 7 ], 5 ]])).to.eql([4, 2, [ 7 ], 5])
  })

})
