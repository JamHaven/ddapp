import React, {Component} from 'react';
import drizzleOptions from './drizzleOptions';
import { LoadingContainer } from '@drizzle/react-components';
import {DrizzleProvider} from "@drizzle/react-plugin";
import Cont from "./MyComponent";
import Container from "./Container";

class App extends Component {
    render() {
        return (
            <DrizzleProvider options={drizzleOptions}>
                <LoadingContainer>
                    <Container />
                </LoadingContainer>
            </DrizzleProvider>
        );
    }
}

export default App;
