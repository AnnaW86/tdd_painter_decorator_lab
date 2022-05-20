const Paint = function(volume) {
    this.volume = volume;
}

Paint.prototype.checkEmpty = function() {
    let empty = false;
    if (this.volume === 0) {
        empty = true;
    }
    return empty;
}

Paint.prototype.beEmptied = function() {
    this.volume = 0;
}


module.exports = Paint;