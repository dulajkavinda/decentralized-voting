// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Votes {
    // model vote
    struct Vote {
        uint256 id;
        string option;
        uint256 voteCount;
    }

    // store vote
    // fetch vote
    mapping(uint256 => Vote) public votes;

    // read votes
    uint256 public votersCount;

    function addVoter(string memory _option) private {
        votersCount++;
        votes[votersCount] = Vote(votersCount, _option, 0);
    }

    // constr
    constructor() public {
        addVoter("Yes");
        addVoter("No");
    }
}
