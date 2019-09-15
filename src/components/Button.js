import React, { Component } from 'react'


export class Button extends Component {
    render() {
        return (
            <div>         
                    {this.props.clear} 
                    {this.props.signFlip}
                    {this.props.percent}
                    {this.props.divide}
                
                    {this.props.seven}
                    {this.props.eight}
                    {this.props.nine}
                    {this.props.multiply}
                
                    {this.props.four}
                    {this.props.five}
                    {this.props.six}
                    {this.props.subtraction}
               
                    {this.props.one}
                    {this.props.two}
                    {this.props.three}
                    {this.props.addition}
                
                    {this.props.zero}
                    {this.props.decimal}
                    {this.props.equalSign}
            </div>
        )
    }
}

export default Button
