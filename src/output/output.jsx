import React from 'react';

export class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <textarea rows="4" cols="50" readOnly value={this.props.outputStream}>

        </textarea>
    }
}
