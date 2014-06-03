describe("when creating a new game", function () {
    "use strict";

    var aGame;

    beforeEach(function () {
        aGame = new Game();
    });

    it("should have winner as empty string", function () {
        expect(aGame.winner).toBe("");
    });

    it("should have moves = 0", function () {
        expect(aGame.moves).toBe(0);
    });

    it("should have currentPlayer.marker = 'x'", function () {
        expect(aGame.currentPlayer.marker).toBe("x");
    });
});

describe("when playerX takes a turn in the top left square", function () {
    "use strict";

    var aGame;

    beforeEach(function () {
        aGame = new Game();
        aGame.takeTurn(0);
    });

    it("should have currentPlayer.marker = 'o'", function () {
        expect(aGame.currentPlayer.marker).toBe("o");
    });
    
    it("should have moves = 1", function () {
       expect(aGame.moves).toBe(1);
    });
    
    it("should have playerX.score = 1", function () {
        aGame.switchPlayer();
        expect(aGame.currentPlayer.score).toBe(1);
    });
});