var Votes = artifacts.require("./Votes.sol");

contract("Votes", function (accounts) {
  var voteInstance;

  it("initializes with two candidates", function () {
    return Votes.deployed()
      .then(function (instance) {
        return instance.votersCount();
      })
      .then(function (count) {
        assert.equal(count, 2);
      });
  });

  it("it initializes the candidates with the correct values", function () {
    return Votes.deployed()
      .then(function (instance) {
        voteInstance = instance;
        return voteInstance.votes(1);
      })
      .then(function (vote) {
        assert.equal(vote[0], 1, "contains the correct id");
        assert.equal(vote[1], "Yes", "contains the correct name");
        assert.equal(vote[2], 0, "contains the correct votes count");
        return voteInstance.votes(2);
      })
      .then(function (vote) {
        assert.equal(vote[0], 2, "contains the correct id");
        assert.equal(vote[1], "No", "contains the correct name");
        assert.equal(vote[2], 0, "contains the correct votes count");
      });
  });
});
