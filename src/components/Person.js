import React from "react";
// import PropTypes from 'prop-types';


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.props = {
            firstName:"",
            lastName: "",
            ps5Consoles: "",
            consoleColor :""
        }
        this.state = {
            consoleCount: 0,
        };
    }
    componentDidMount(){
       this.setState({
            consoleCount: Number(this.props.ps5Consoles)})
    }

    handleClick = () => {
        this.setState({
            consoleCount: this.state.consoleCount+1,
        },
        function () {
            console.log("done working");
        });
    }

    render() {
        console.log("props:", this.props);

        console.log("state:", this.state);
        return(
            <div>
                <h3>{this.props.firstName} {this.props.lastName}</h3>
                <p>{this.props.firstName} has {this.state.consoleCount} Ps5 consoles and counting.</p>
                <h4>System Color:</h4>
                <p>{this.props.consoleColor}</p>
                <button onClick={this.handleClick}>Lets add some more!</button>
            </div>
        )
    };
}
export default Person;