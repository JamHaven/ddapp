import Storage from './contracts/Storage.json'
import Product from './contracts/Product.json'
const options = {
    contracts: [Storage],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545"
        }
    }
};

export default options;