import React from "react";

import './item-add-form.css';

export default class ItemAddForm extends React.Component {

    state = {
        text : ''
    };

    onLabelChange = (event) => {
        this.setState({ text: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.text);
        this.setState({ text: '' });
    };

    render() {
        return (
            <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
                <input type='text' className='form-control'
                       placeholder='What needs to be done?' onChange={this.onLabelChange}
                       value={this.state.text}/>

                <button className='btn btn-outline-secondary'>
                    Add item
                </button>
            </form>
        );
    }
}