const formatFullname = require('./formatFullname.js');
const expect = require('chai').expect;

describe('Format Fullname', () => {

  it('should return Error if arg formatFullname is empty', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return an error if arg formatFullname arg is not a string', () => {
    expect(formatFullname(undefined, 20)).to.equal('Error');
    expect(formatFullname(12, 20)).to.equal('Error');
    expect(formatFullname({}, 20)).to.equal('Error');
    expect(formatFullname([], 20)).to.equal('Error');
    expect(formatFullname(function () { }, 20)).to.equal('Error');
  });

  it('should return fullName without changes if proper args', () => {
    expect(formatFullname('John Doe')).to.equal('John Doe');
  });


  it('should return an Error if an arg string has no format "<firstname> <lastname>"', () => {
    expect(formatFullname('name')).to.equal('Error');
    expect(formatFullname(' surname')).to.equal('Error');
    expect(formatFullname('name ')).to.equal('Error');
  });


  it('should return an error, if formatFullname arg is shorter or longer than two words', () => {
    expect(formatFullname('John Doe Test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return proper format string "Firstname Lastname" when an arg is in not good format', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JoHn dOe')).to.equal('John Doe');
  });

});