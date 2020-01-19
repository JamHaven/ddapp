pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract Product {
    address owner;
    uint256 startTime;

    struct ProductInformation{
        address productOwnerAddress;
        string productOwnerName;
        string productName;
        uint creationDate;
    }

    ProductInformation[] productInfoList;

    modifier onlyWhileOpen() {
        require(block.timestamp >= startTime);
        _;
    }

    constructor() public {
        owner = msg.sender;
        startTime = 1579399089;
    }

    function addProduct(string memory productOwnerName, string memory productName) onlyWhileOpen public{
        productInfoList.push(ProductInformation(msg.sender, productOwnerName, productName, block.timestamp));
    }

    function getProduct() view public returns (ProductInformation[] memory) {
        return productInfoList;
    }

}