// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IBurnRedeemable {
    event Redeemed(
        address indexed user,
        address indexed yueContract,
        address indexed tokenContract,
        uint256 yueAmount,
        uint256 tokenAmount
    );

    function onTokenBurned(address user, uint256 amount) external;
}
