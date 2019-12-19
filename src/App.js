import React, {Component} from 'react';
import { LoadingContainer } from '@drizzle/react-components';
import {DrizzleProvider} from "@drizzle/react-plugin";

import "./App.css";

import drizzleOptions from './drizzleOptions';
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
