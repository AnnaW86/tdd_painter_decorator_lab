const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function() {

    let paint;

    this.beforeEach(function() {
        paint1 = new Paint(7);
        paint2 = new Paint(0);
    })

    it('should be able to be checked if empty - when not', function() {
        assert.strictEqual(paint1.checkEmpty(), false);
    })
    it('should be able to be checked if empty - when empty', function() {
        assert.strictEqual(paint2.checkEmpty(), true);
    })

    it('should be able to be emptied', function() {
        paint1.beEmptied();
        assert.strictEqual(paint1.checkEmpty(), true);
    })
})