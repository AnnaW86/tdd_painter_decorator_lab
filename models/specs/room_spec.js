const assert = require('assert');
const Room = require('../room');

describe('Room', function() {

    let room;

    beforeEach(function() {
        room = new Room('50');
    });

    it('should start unpainted', function() {
        assert.strictEqual(room.paintedStatus, false);  
    })

    it('should be able to be painted', function() {
        room.bePainted();
        assert.strictEqual(room.paintedStatus, true);
    })

})