import React, { Component } from 'react';

import '../responsive.css';



class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                border: '2px solid #555555',
                backgroundColor: '#cccccc'
            },
            isClick: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        //e.preventDefault();

        let temp = {}
        switch (+this.props.btn_key) {

            case 0:
                temp = {
                    border: '2px solid #66D48F',
                    backgroundColor: '#D1F2DD'
                }
                this.setState({
                    style: temp,
                    isClick: true
                })
                return;
            case 1:
                temp = {
                    border: '2px solid #f54b47',
                    backgroundColor: '#fcc2c0'
                }
                this.setState({
                    style: temp,
                    isClick: true
                })
                break;
            case 2:
                temp = {
                    border: '2px solid #f37735',
                    backgroundColor: '#fbd6c2'
                }
                this.setState({
                    style: temp,
                    isClick: true
                })
                break;
            case 3:
                temp = {
                    border: '2px solid #428bca',
                    backgroundColor: '#c6dcef'
                }
                this.setState({
                    style: temp,
                    isClick: true
                })
                break;
            case 4:
                temp = {
                    border: '2px solid #40e0d0',
                    backgroundColor: '#c5f5f0'
                }
                this.setState({
                    style: temp,
                    isClick: true
                })
                break;
            case 5:
                temp = {
                    border: '2px solid #ffbf00',
                    backgroundColor: '#ffebb2'
                }
                this.setState({
                    style: temp,
                    isClick: true
                })
                break;
            default:
        }

    }
    render() {
        // let btn = {}
        // let temp = {}
        // switch (+this.props.btn_key) {

        //     case 1:
        //         temp = {
        //             border: '2px solid #66D48F',
        //             backgroundColor: '#D1F2DD'
        //         }
        //         btn = { ...temp }
        //         break;
        //     case 2:
        //         temp = {
        //             border: '2px solid #f54b47',
        //             backgroundColor: '#fcc2c0'
        //         }
        //         btn = { ...temp }
        //         break;
        //     case 3:
        //         temp = {
        //             border: '2px solid #f37735',
        //             backgroundColor: '#fbd6c2'
        //         }
        //         btn = { ...temp }
        //         break;
        //     case 4:
        //         temp = {
        //             border: '2px solid #428bca',
        //             backgroundColor: '#c6dcef'
        //         }
        //         btn = { ...temp }
        //         break;
        //     case 5:
        //         temp = {
        //             border: '2px solid #40e0d0',
        //             backgroundColor: '#c5f5f0'
        //         }
        //         btn = { ...temp }
        //         break;
        //     case 6:
        //         temp = {
        //             border: '2px solid #ffbf00',
        //             backgroundColor: '#ffebb2'
        //         }
        //         btn = { ...temp }
        //         break;
        //     default:
        // }

        return (
            <button
                className="btn-custom"
                style={this.state.style}
                onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}

export default Button;