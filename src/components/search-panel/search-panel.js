import React from "react";

import "./search-panel.css";

const SearchPanel = () => {
    const placeholder = 'Type here to search';

    return (
        <input type='text' placeholder={placeholder} className="form-control search-input"/>
    );
};

export default SearchPanel;