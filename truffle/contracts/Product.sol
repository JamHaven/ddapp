pragma solidity >=0.5.0  <0.6.0;
//pragma experimental ABIEncoderV2;

contract Product {
    address owner;
    uint256 startTime;
    int productId;

    struct ProductInformation{
        address productOwnerAddress;
        string productOwnerName;
        string productName;
        uint creationDate;
    }

    mapping (int => ProductInformation) productInfos;

    int[] productInfoList;

    modifier onlyWhileOpen() {
        require(block.timestamp >= startTime);
        _;
    }

    constructor() public {
        owner = msg.sender;
        startTime = 1579399089;
        productId = 0;
    }

    function addProduct(string memory _productOwnerName, string memory _productName) onlyWhileOpen public{
        Product.ProductInformation storage productInfo = productInfos[productId +1];


        productInfo.productOwnerAddress = msg.sender;
        productInfo.productOwnerName = _productOwnerName;
        productInfo.productName = _productName;
        productInfo.creationDate = block.timestamp;


        productInfoList.push(productId +1);
        productId = productId +1;

    }


    function getAllProductIds() view public returns(int[] memory){
        return productInfoList;
    }

    function getProductFromProductId(int  _productId) view public returns(address , string memory, string memory, uint ){
        return (productInfos[_productId].productOwnerAddress, productInfos[_productId].productOwnerName, productInfos[_productId].productName, productInfos[_productId].creationDate);
    }

    function getProductOwnerFromProductId(string memory _asdf) view public returns(string memory){
        return _asdf;
    }

}