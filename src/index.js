import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle, generateStore } from "@drizzle/store";
import Storage from "./contracts/Storage.json";
import './index.css';
import App from './App';

const options = {
    contracts: [Storage],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:7545",
        },
    },
};
//const drizzleStore = generateStore(options);
//const drizzle = new Drizzle(options, drizzleStore);
const drizzle = new Drizzle(options);

ReactDOM.render(<App drizzle={drizzle} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA









