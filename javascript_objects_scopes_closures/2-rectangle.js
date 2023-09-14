#!/usr/bin/node

class Rectangle {
    constructor(width, height) {
        if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
            return {};
        }

        this.width = width;
        this.height = height;
    }
}

module.exports = Rectangle;