import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clicking } from '../../actions';
import '../responsive.css';



class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                border: '2px solid #555555',
                backgroundColor: '#cccccc'
            }
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
                })
                this.props.clicking(true, +this.props.btn_key);
                return;
            case 1:
                temp = {
                    border: '2px solid #f54b47',
                    backgroundColor: '#fcc2c0'
                }
                this.setState({
                    style: temp,
                })
                this.props.clicking(true, +this.props.btn_key);
                break;
            case 2:
                temp = {
                    border: '2px solid #f37735',
                    backgroundColor: '#fbd6c2'
                }
                this.setState({
                    style: temp,
                })
                this.props.clicking(true, +this.props.btn_key);
                break;
            case 3:
                temp = {
                    border: '2px solid #428bca',
                    backgroundColor: '#c6dcef'
                }
                this.setState({
                    style: temp,
                })
                this.props.clicking(true, +this.props.btn_key);
                break;
            case 4:
                temp = {
                    border: '2px solid #40e0d0',
                    backgroundColor: '#c5f5f0'
                }
                this.setState({
                    style: temp,
                })
                this.props.clicking(true, +this.props.btn_key);
                break;
            case 5:
                temp = {
                    border: '2px solid #ffbf00',
                    backgroundColor: '#ffebb2'
                }
                this.setState({
                    style: temp,
                })
                this.props.clicking(true, +this.props.btn_key);
                break;
            default:
        }

    }
    render() {
        console.log(this.props);
        return (
            <button
                className="btn-custom"
                style={this.props.style
                    ? this.props.style
                    : this.state.style}
                onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}

const mapStateToProps = (state) => {
    const { isClick } = state;
    return {
        isClick: isClick
    }
}

const mapDispatchToProps = {
    clicking: clicking,
}


export default connect(mapStateToProps, mapDispatchToProps)(Button);