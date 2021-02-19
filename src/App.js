import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Header from "./components/Header";
import About from "./components/About";
import NotFound from "./components/NotFound";
import test from "./components/Test/test";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="App">
                        <Header branding="Contact Manager" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route
                                    exact
                                    path="/contact/add"
                                    component={AddContact}
                                />
                                <Route
                                    exact
                                    path="/contact/edit/:id"
                                    component={EditContact}
                                />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/test" component={test} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
