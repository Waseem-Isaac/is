const assert = require('assert');
const is = require('../is.js');

describe('isString', function () {
    it('should return true I passed it a String value as a paremeter', () =>
        assert.equal(is.string('test'), true)
    )
    it('should return true I passed it a Number value as a paremeter', () =>
        assert.equal(is.number(22), true)
    )
    it('should return true I passed it a Boolean value as a paremeter', () =>
        assert.equal(is.boolean(false), true)
    )
    it('should return true I passed it an Array value as a paremeter', () =>
        assert.equal(is.array([1,2,3]), true)
    )
    it('should return true I passed it an Email as a paremeter', () =>
        assert.equal(is.email('test@test.test'), true)
    )
    it('should return true I passed it an Integer value as a paremeter', () =>
        assert.equal(is.integer(2), true)
    )
    it('should return true I passed it a Float value as a paremeter', () =>
        assert.equal(is.float(2.2), true)
    )
    it('should return true I passed it a Url as a paremeter', () =>
        assert.equal(is.url("http://someUrl.com"), true)
    )
    it('should return true I passed it an Ip as a paremeter', () =>
        assert.equal(is.ip('192.168.100.1'), true)
    )
})



