import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <a
                className={`btn ${this.props.className}`}
                href={this.props.href}
                onClick={this.props.onClick}>
                {this.props.text}
            </a>
        );
    }
}

export default Button;