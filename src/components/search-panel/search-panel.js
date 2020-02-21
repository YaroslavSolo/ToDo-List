import React from "react";

import "./search-panel.css";

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    };

    onTextChange = (event) => {
        //event.preventDefault(); // needed only for forms
        this.setState({ term: event.target.value });
        this.props.onSearchTextChanged(event.target.value);
    };

    render() {
        const placeholder = 'Type here to search';

        return (
            <input type='text' placeholder={placeholder} className="form-control search-input"
                   onChange={this.onTextChange} value={this.state.term}/>
        );
    }
}
