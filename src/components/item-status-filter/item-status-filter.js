import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All'},
        { name: 'active', label: 'Active'},
        { name: 'done', label: 'Done'}
    ];

    render() {
        const buttonComponents = this.buttons.map(({ name, label }) => {
            const { filter, onFilterChanged } = this.props;
            const clazz = filter === name ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button type='button' className={`btn ${clazz}`}
                        key={name} onClick={() => onFilterChanged(name)}>{label}</button>
            );
        });

        return (
            <div className="btn-group">
                {buttonComponents}
            </div>
        );
    }
}
