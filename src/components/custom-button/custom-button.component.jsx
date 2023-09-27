import React from "react";

import './custom-button.styles.scss';

const CustomBotten = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustomBotten