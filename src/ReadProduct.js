import React from "react";


class ReadProduct extends React.Component {
    state = { dataKey: null };

    componentDidMount() {
        const { drizzle, drizzleState } = this.props;
        const contract = drizzle.contracts.Product;

        // let drizzle know we want to watch the `myString` method
        const dataKey = contract.methods["getAllProductIds"].cacheCall();

        // save the `dataKey` to local component state for later reference
        this.setState({ dataKey });
    }

    render() {
        // get the contract state from drizzleState
        const { Product } = this.props.drizzleState.contracts;

        // using the saved `dataKey`, get the variable we're interested in
        const myString = Product.getAllProductIds[this.state.dataKey];

        // if it exists, then we display its value
        return <p>Stored ProductIDs: {myString && myString.value}</p>;
    }
}

export default ReadProduct;
