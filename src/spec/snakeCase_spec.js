import chai from 'chai'
import snakeCase from '../lib/snakeCase.js'
const expect = chai.expect

describe('snake_case', () => {
  it('Returns the snake cased string if all letters are uppercased', () => {
    expect(snakeCase('CAR DOOR')).to.eql('car_door')
  })
  it('Returns the snake cased string if first letters are uppercased ', () => {
    expect(snakeCase('Car Door')).to.eql('car_door')
  })
  it('Returns the snake cased string if string is camelCased', () => {
    expect(snakeCase('carDoor')).to.eql('car_door')
  })
  it('Returns the snake cased string if string is spaced with multiple dashes or spaces', () => {
    expect(snakeCase('--car---Door---')).to.eql('car_door')
  })
})
