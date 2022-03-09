import React, { Component } from 'react';

class Logo extends Component {
    state = {  } 
    render() { 
        return (
        <img
        src={require("../assets/logo.png")}
        className="mr-3 h-6 sm:h-10"
        alt="Logo"
        width={200}
      />
        );
    }
}
 
export default Logo;