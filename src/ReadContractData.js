import React from "react";

import logo from "./logo.png";


class ReadContractData extends React.Component {
    state = { dataKey: null };

    componentDidMount() {
        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.Storage;

        // let drizzle know we want to watch the `myString` method
        const dataKey = contract.methods["getData"].cacheCall();

        // save the `dataKey` to local component state for later reference
        this.setState({ dataKey });
    }

    render() {
        // get the contract state from drizzleState
        const { Storage } = this.props.drizzleState.contracts;

        // using the saved `dataKey`, get the variable we're interested in
        const myString = Storage.getData[this.state.dataKey];

        // if it exists, then we display its value
        return (
            <div><img src={logo} alt="drizzle-logo" />
            <p>My stored string: {myString && myString.value}</p></div>
        );
    }
}

export default ReadContractData;
