import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackButton.css';

class BackButton extends Component {
    handleClick = () => {
        this.props.history.goBack()
    }
    render() { 
        return (
            <div className="back-button" onClick={this.handleClick}>
                <h3>Go Back</h3>
            </div>
            
        );
    }
}
 
export default BackButton;


BackButton.propTypes = {
    history: PropTypes.object.isRequired
}