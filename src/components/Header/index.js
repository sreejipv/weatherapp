import React, { Component } from 'react';
import Spacer from '../Spacer'

function Header() {
    return(
        <div className="container ">
            <Spacer mt={20}/>
            <div className="wa-logo">
                <h1>Weather App</h1>  
            <Spacer mt={20}/>
            </div>
        </div>
    )
}

export default Header;