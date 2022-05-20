const assert = require('assert');
const Decorator = require('../decorator');
const Paint = require('../paint');
const Room = require('../room');

describe('Decorator', function() {

    let decorator;
    let paint1;
    let paint2;
    let paint3;
    let paint4;

    beforeEach(function() {
        decorator = new Decorator();
        paint1 = new Paint(10);
        paint2 = new Paint(10);
        paint3 = new Paint(15);
        paint4 = new Paint(15);
        paint5 = new Paint(0);
        room = new Room(25);
    });

    it('should start with no paint in stock', function() {
        assert.deepStrictEqual(decorator.stock.length, 0);
    })

    describe('with paint', function() {
        it('should be able to add can of paint to stock', function() {
            decorator.addToStock(paint1);
            assert.deepStrictEqual(decorator.stock, [paint1]);
        })

        it('should be able to calculate volume of paint in stock', function() {
            paintsInStock = [paint1, paint2];
            for (let paint of paintsInStock) {
                decorator.addToStock(paint);
            }
            assert.strictEqual(decorator.calculateVolumeOfStock(), 20);
        })

        it('should be able to check if enough paint in stock to paint room - when not', function() {
            paintsInStock = [paint1, paint2];
            for (let paint of paintsInStock) {
                decorator.addToStock(paint);
            }
            assert.strictEqual(decorator.checkEnoughStockForRoom(room), false);
        })

        it('should be able to check if enough paint in stock to paint room - when yes', function() {
            paintsInStock = [paint1, paint2, paint3];
            for (let paint of paintsInStock) {
                decorator.addToStock(paint);
            }
            assert.strictEqual(decorator.checkEnoughStockForRoom(room), true);
        })

        it('should remove empty cans', function() {
            paintsInStock = [paint1, paint2, paint5];
            for (let paint of paintsInStock) {
                decorator.addToStock(paint);
            }
            decorator.removeCanWhenEmpty();
            assert.deepStrictEqual(decorator.stock, [paint1, paint2]);
        })

        it('should decrease stock when painting a room', function() {
            paintsInStock = [paint1, paint2, paint3, paint4];
            for (let paint of paintsInStock) {
                decorator.addToStock(paint);
            }
            decorator.decreaseStockWhilePainting(room);
            assert.strictEqual(decorator.calculateVolumeOfStock(), 25);
            assert.strictEqual(decorator.stock.length, 2);
        })

        it('should paint a room', function() {
            paintsInStock = [paint1, paint2, paint3, paint4];
            for (let paint of paintsInStock) {
                decorator.addToStock(paint);
            }
            decorator.paintARoom(room);
            assert.strictEqual(decorator.calculateVolumeOfStock(), 25);
            assert.strictEqual(room.paintedStatus, true);
        })
    })
})