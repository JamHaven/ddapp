const Product = artifacts.require("Product");

module.exports = function(_deployer) {
	_deployer.deploy(Product);
};
