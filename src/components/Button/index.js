import React, { Component } from 'react';
import classnames from 'classnames'


function Button(props) {
    const { attribute, className ,onClick} = props;
    const buttonClass = classnames("primary-btn pl-12 pr-12 br-5 pt-10 pb-10",className)

    return(
        <div className={buttonClass} onClick={onClick}>
           {attribute}
        </div>
    )
}

export default Button;