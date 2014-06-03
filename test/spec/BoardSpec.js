describe("when creating a new board", function () {
    "use strict";
    
    var aBoard;
    
    beforeEach(function () {
        aBoard = new Board();
    });
    
    it("should initiate squareList with 9 squares", function () {
        expect(aBoard.squareList.length).toBe(9);
    });
    
    it("topLeftSquare should have be worth 1 point", function () {
        expect(aBoard.squareList[0].pointValue).toBe(1);
    });
    
    it("topCenterSquare should have be worth 2 points", function () {
        expect(aBoard.squareList[1].pointValue).toBe(2);
    });
    
    it("topRightSquare should have be worth 4 points", function () {
        expect(aBoard.squareList[2].pointValue).toBe(4);
    });
    
    it("leftSquare should have be worth 8 points", function () {
        expect(aBoard.squareList[3].pointValue).toBe(8);
    });
    
    it("centerSquare should have be worth 16 points", function () {
        expect(aBoard.squareList[4].pointValue).toBe(16);
    });
    
    it("rightSquare should have be worth 32 points", function () {
        expect(aBoard.squareList[5].pointValue).toBe(32);
    });
    
    it("bottomLeftSquare should have be worth 64 points", function () {
        expect(aBoard.squareList[6].pointValue).toBe(64);
    });
    
    it("bottomCenterSquare should have be worth 128 points", function () {
        expect(aBoard.squareList[7].pointValue).toBe(128);
    });
    
    it("bottomRightSquare should have be worth 256 points", function () {
        expect(aBoard.squareList[8].pointValue).toBe(256);
    });
});

describe("when playerX marks topLeftSquare", function () {
    "use strict";
    
    var squareIndex,
        aBoard,
        playerX;
    
    beforeEach(function () {
        squareIndex = 0;
        aBoard = new Board();
        playerX = new Player("x");
        aBoard.markSquare(squareIndex, playerX);
    });
    
    it("should return true if square is unoccupied", function () {
        expect(aBoard.markSquare(squareIndex, playerX)).toBeTruthy;
    });
    
    it("should set aSquare's isOccupied to true", function () {
        expect(aBoard.squareList[squareIndex].isOccupied).toBeTruthy;
    });
    
    it("should set aSquare's markerValue to 'x'", function () {
        expect(aBoard.squareList[squareIndex].markerValue).toBe("x");
    });
    
    it("should set playerX's score to 1", function () {
        expect(playerX.score).toBe(1);
    });
    
    it("should return false if square is already occupied", function () {
        expect(aBoard.markSquare(squareIndex, playerX)).toBeFalsy;
    });
});