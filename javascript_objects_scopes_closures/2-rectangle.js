/*
A simple rectangle class with width and height
if width and height are negative of not not integers
an empty obect is returned
*/

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