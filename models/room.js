const Room = function(area) {
    this.area = area;
    this.paintedStatus = false;
}

Room.prototype.bePainted = function() {
    this.paintedStatus = true;
}

module.exports = Room;