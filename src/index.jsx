import React from 'react';
import ReactDOM from 'react-dom';
import { Results } from "./output";
import { Input } from './input';

class App extends React.Component {
    render() {
        return <div>
            <h1>Hai</h1>
            <div><Input /></div>
            <Results></Results>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('birdie'));