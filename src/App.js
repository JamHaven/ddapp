import React, {Component} from 'react';
import "./App.css";

/*import drizzleOptions from './drizzleOptions';
import Container from "./Container";
const options = { contracts: [Storage] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);*/
import ReadContractData from "./ReadContractData";
import WriteContractData from "./WriteContractData";

class App extends Component {
    state = { loading: true, drizzleState: null };

    componentDidMount() {
        const{ drizzle} = this.props;

        // subscribe to changes in the store
        this.unsubscribe = drizzle.store.subscribe(() => {

            // every time the store updates, grab the state from drizzle
            const drizzleState = drizzle.store.getState();

            // check to see if it's ready, if so, update local component state
            if (drizzleState.drizzleStatus.initialized) {
                this.setState({loading: false, drizzleState});
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        if (this.state.loading) return "Loading Drizzle...";
        //return <div className="App">Drizzle is ready</div>;
        return (
            <div className="App">
                <ReadContractData
                    drizzle={this.props.drizzle}
                    drizzleState={this.state.drizzleState}
                />
                <WriteContractData
                    drizzle={this.props.drizzle}
                    drizzleState={this.state.drizzleState}
                />
            </div>
        );
    }

}

export default App;
