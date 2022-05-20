const Decorator = function() {
    this.stock = [];
}

Decorator.prototype.addToStock = function(paintCan) {
    this.stock.push(paintCan);
}

Decorator.prototype.calculateVolumeOfStock = function() {
    let totalVolume = 0;
    for (let can of this.stock) {
        totalVolume += can.volume;
    }
    return totalVolume;
}

Decorator.prototype.checkEnoughStockForRoom = function(room) {
    return this.calculateVolumeOfStock() >= room.area;
}

Decorator.prototype.removeCanWhenEmpty = function() {
    let cansToKeep = [];
    for (let paintCan of this.stock) {
        if (paintCan.volume != 0) {
            cansToKeep.push(paintCan);
        }
    }
    this.stock = cansToKeep
}

Decorator.prototype.decreaseStockWhilePainting = function(room) {
    for (let paintCan of this.stock) {
        if (paintCan.volume <= room.area) {
            room.area -= paintCan.volume;
            paintCan.beEmptied();
        } else {
            paintCan.volume -= room.area;
            room.area = 0;
        }
    }
    this.removeCanWhenEmpty();
}

Decorator.prototype.paintARoom = function(room) {
    if (!room.paintedStatus) {
        if (this.checkEnoughStockForRoom(room)) {
            this.decreaseStockWhilePainting(room);
            room.bePainted();
        } else {
            console.log('You need to buy more paint first.');
        }
    } else {
        console.log('Erm, you\'ve already painted this one...');
    } 
}


module.exports = Decorator;