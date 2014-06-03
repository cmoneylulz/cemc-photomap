describe("When instantiating player x", function () {
	"use strict";

	var playerX;

	beforeEach(function () {
        playerX = new Player("x");
	});

	it("should have x as marker", function () {
		expect(playerX.marker).toBe("x");
	});
    
    it("should have a score of 0", function () {
        expect(playerX.score).toBe(0);
    });
    
    it("should not be a winner", function () {
        expect(playerX.isWinner).toBeFalsy;
    });
});

describe("When instantiating player o", function () {
	"use strict";

	var playerO;

	beforeEach(function () {
        playerO = new Player("o");
	});

	it("should have o as marker", function () {
		expect(playerO.marker).toBe("o");
	});
    
    it("should have a score of 0", function () {
        expect(playerO.score).toBe(0);
    });
    
    it("should not be a winner", function () {
        expect(playerO.isWinner).toBeFalsy;
    });
});

describe("When player has a winning score", function () {
    "use strict";
    
    var playerX;
    
    beforeEach(function () {
        playerX = new Player("x");
    });
    
    it("should win with score of 7", function() {
        playerX.score = 7;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 56", function() {
        playerX.score = 56;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 448", function() {
        playerX.score = 448;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 73", function() {
        playerX.score = 73;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 146", function() {
        playerX.score = 146;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 292", function() {
        playerX.score = 292;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 273", function() {
        playerX.score = 273;
        expect(playerX.checkForWin()).toBeTruthy;
    });
    
    it("should win with score of 84", function() {
        playerX.score = 84;
        expect(playerX.checkForWin()).toBeTruthy;
    });
});