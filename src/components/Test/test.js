import React, { Component } from "react";

class test extends Component {
    state = {
        title: "",
        body: "",
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    title: data.title,
                    id: data.id,
                });
            });
    }
    // componentWillMount() {
    //     console.log("Will mount");
    // }
    // componentDidUpdate() {
    //     console.log("Did update");
    // }
    // componentWillUpdate() {
    //     console.log("Component will update");
    // }
    // componentWillReceiveProps(nextProps, nextState) {
    //     console.log("Component will receive props");
    // }

    render() {
        const { title, id } = this.state;
        return (
            <div>
                <h1>Test Component</h1>
                {title}
                {id}
            </div>
        );
    }
}
export default test;
