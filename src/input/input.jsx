import React from 'react';
import axios from 'axios';

export class Input extends React.Component {
    constructor() {
        super();
        this.sendCommand = this.sendCommand.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOutput = this.handleOutput.bind(this);
        this.state = {
            command: '',
            results: ''
        }
    }

    handleInput(input) {
        // console.log(input.target.value);
        this.setState({ command: input.target.value })
    }

    handleOutput(output) {
        console.log(output);
        this.setState({ results: output });
    }

    sendCommand() {
        console.log("sending command");
        axios.post('http://localhost:5080/echo', { command: this.state.command }).then(this.handleOutput);
    }

    render() {
        return <div>
            <input type="text" onChange={this.handleInput} value={this.state.command} />
            <button onClick={this.sendCommand}>
                Send it.
            </button>
        </div>
    }
}