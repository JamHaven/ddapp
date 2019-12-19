import React from 'react';
//import { newContextComponents } from "@drizzle/react-components";
//const { AccountData, ContractData, ContractForm } = newContextComponents;
import {
    AccountData,
    ContractData,
    ContractForm
} from '@drizzle/react-components';

import logo from "./logo.png";

const MyComponent = () => (
  <div className="App">
      <div>
          <img src={logo} alt="drizzle-logo" />
          <h1>Drizzle Playground</h1>
      </div>
      <h2>Balance of first Account</h2>
      <AccountData accountIndex={0} units={"ether"} precision={3} />

      <h2>getData()</h2>
      <ContractData contract="Storage" method="getData" />

      <h2>setData()</h2>
      <ContractForm contract="Storage" method="setData" labels={['new value of "data"']} />

  </div>

);

export default MyComponent;