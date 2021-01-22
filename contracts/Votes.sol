// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract Votes {
    // store vote
    // read votes
    string public vote;

    // constr
    constructor() public {
        vote = "Yes";
    }
}
