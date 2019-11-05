import React from 'react';
import axios from 'axios';
// TODO: rename class names Results/Output and Input
export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOutput = this.handleOutput.bind(this);
        this.state = {
            command: ''
        }
    }

    handleInput(i) {
        // console.log(input.target.value);
        this.setState({ command: i.target.value })
    }

    handleOutput(output) {
        console.info(`Input.handleOutput :: ${output.data}`);
        this.setState({ results: output });
    }

    handleSubmit() {
        console.log(`Input.handleSubmit :: ${this.state.command}`);
        this.props.callAPI(this.state.command);
    }

    render() {
        return <div>
            <input type="text" onChange={this.handleInput} value={this.state.command} />
            <button onClick={this.handleSubmit}>
                Send it.
            </button>
        </div>
    }
}