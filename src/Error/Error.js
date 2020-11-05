import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {      
          return (
            <h2>There has been an error, please refresh the page and try again</h2>
          );
        }
        return this.props.children;
    } 
}



Error.propTypes = {
    children: PropTypes.array
}
 
export default Error;