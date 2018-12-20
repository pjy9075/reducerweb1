import React, { Component } from 'react';
import PropTypes from 'prop-types';


function createWarning(funcName){
    return ()=> console.warn(funcName + 'is not defined')
};


class Control extends Component {

    static defaultProps={
        onPlus: ()=>createWarning('onPlus'),
        onSubtract:()=>createWarning('onSubtract'),
        onRandomizeColor:()=>createWarning('onRandomizeColor'),
    };


render() {
     return (
        <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onPlus}>-</button>
                <button onClick={this.props.onPlus}>RandomColorSize</button>
        </div>
        );
    }
}

Control.propTypes = {
            onPlus:PropTypes.func,
            onSubtract:PropTypes.func,
            onRandomizeColor:PropTypes.func
            };

export default Control;
