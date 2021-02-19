import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
    };
    state = {
        showContactInfo: false,
    };
    onDeleteClick = async (id, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: "DELETE_CONTACT", payload: id });
    };
    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {(value) => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                {showContactInfo ? (
                                    <React.Fragment>
                                        <i
                                            className="fas fa-sort-up"
                                            onClick={() => {
                                                this.setState({
                                                    showContactInfo: !this.state
                                                        .showContactInfo,
                                                });
                                            }}
                                        ></i>

                                        <i
                                            className="fas fa-times"
                                            style={{
                                                float: "right",
                                                color: "red",
                                            }}
                                            onClick={this.onDeleteClick.bind(
                                                this,
                                                id,
                                                dispatch
                                            )}
                                        ></i>
                                        <Link to={`/contact/edit/${id}`}>
                                            <i
                                                className="fas fa-pencil-alt"
                                                style={{
                                                    color: "black",
                                                    float: "right",
                                                    cursor: "pointer",
                                                    marginRight: "1rem",
                                                    fontSize: "20px",
                                                }}
                                            ></i>
                                        </Link>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <i
                                            className="fas fa-sort-down"
                                            onClick={() => {
                                                this.setState({
                                                    showContactInfo: !this.state
                                                        .showContactInfo,
                                                });
                                            }}
                                        ></i>

                                        <i
                                            className="fas fa-times"
                                            style={{
                                                float: "right",
                                                color: "red",
                                            }}
                                            onClick={this.onDeleteClick.bind(
                                                this,
                                                id,
                                                dispatch
                                            )}
                                        ></i>
                                        <Link to={`/contact/edit/${id}`}>
                                            <i
                                                className="fas fa-pencil-alt"
                                                style={{
                                                    color: "black",
                                                    float: "right",
                                                    cursor: "pointer",
                                                    marginRight: "1rem",
                                                    fontSize: "20px",
                                                }}
                                            ></i>
                                        </Link>
                                    </React.Fragment>
                                )}
                            </h4>

                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
// };

export default Contact;
