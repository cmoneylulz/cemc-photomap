describe("when creating a new square worth 1 point", function () {
    "use strict";
    
    var aSquare;
    
    beforeEach(function () {
        aSquare = new Square(1);
    });
    
    it("should have a pointValue of 1", function () {
        expect(aSquare.pointValue).toBe(1);
    });
    
    it("should not be occupied", function () {
        expect(aSquare.isOccupied).toBeFalsy;
    });
    
    it("should have a space as its markerValue", function () {
        expect(aSquare.markerValue).toBe(" ");
    });
});

