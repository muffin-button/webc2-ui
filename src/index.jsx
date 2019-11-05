import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Results } from "./output";
import { Input } from './input';

class App extends React.Component {
    constructor() {
        super();
        this.sendCommand = this.sendCommand.bind(this);
        this.state = { data: '' };
        this.handleOutput = this.handleOutput.bind(this);
    }

    sendCommand(cmd) {
        console.log("sending command");
        axios.post('http://localhost:5080/echo', { command: cmd }).then(this.handleOutput);
    }

    handleOutput(output) {
        console.info(`App.handleOutput :: ${output.data}`);
        this.setState({ data: output.data });
    }

    render() {
        return <div>
            <h1>Hai</h1>
            <div><Input callAPI={this.sendCommand} /></div>
            <Results outputStream={this.state.data}></Results>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('birdie'));