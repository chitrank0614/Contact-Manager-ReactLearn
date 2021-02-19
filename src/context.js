import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            };
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === action.payload.id
                        ? (contact = action.payload)
                        : contact
                ),
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-5555-555",
            },
            {
                id: 2,
                name: "Karen Smith",
                email: "ksmith@gmail.com",
                phone: "333-3333-333",
            },
            {
                id: 3,
                name: "Henry Johnson",
                email: "hjohnson@gmail.com",
                phone: "222-2222-222",
            },
        ],
        dispatch: (action) => {
            this.setState((state) => reducer(state, action));
        },
    };
    // componentDidMount() {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => this.setState({ contacts: response.data }));
    // }

    async componentDidMount() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        this.setState({ contacts: response.data });
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
