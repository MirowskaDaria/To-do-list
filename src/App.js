import React from 'react'
import { Grid } from "react-bootstrap";

import Header from "./components/Header";
import Footer from './components/Footer';

import {BrowserRouter, Route, Switch} from "react-router-dom"

import List from "./scenes/List";


class App  extends  React.Component {

    render() {

        return (
            <BrowserRouter>
                <Grid>
                    <Header/>

                    <List/>

                    <Footer/>
                </Grid>
            </BrowserRouter>
        )
    }
}

export default App;