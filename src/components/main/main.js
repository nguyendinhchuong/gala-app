import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';
import Button from '../button/button';
import { connect } from 'react-redux';
import { reverseClickState } from '../../actions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAllClick: false
        }
        this.callReverse = this.callReverse.bind(this);
    }
    callReverse() {
        this.props.reverseClickState();

    }
    render() {
        if (this.props.isAllClick) {
            this.props.reverseClickState()
            console.log("style", this.props.style);
            return (
                <div className="container">
                    <Row>
                        <Col>
                            <Button name="VNG15" btn_key="0" style={this.props.style}></Button>
                        </Col>
                        <Col>
                            <Button name="VNG15" btn_key="1" style={this.props.style}></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button name="VNG15" btn_key="2" style={this.props.style}></Button>
                        </Col>
                        <Col>
                            <Button name="VNG15" btn_key="3" style={this.props.style}></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button name="VNG15" btn_key="4" style={this.props.style}></Button>
                        </Col>
                        <Col>
                            <Button name="VNG15" btn_key="5" style={this.props.style}></Button>
                        </Col>
                    </Row>
                </div>
            )
        }
        return (
            <div className="container">
                <Row>
                    <Col>
                        <Button name="VNG15" btn_key="0" style={this.props.style}></Button>
                    </Col>
                    <Col>
                        <Button name="VNG15" btn_key="1" style={this.props.style}></Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button name="VNG15" btn_key="2" style={this.props.style}></Button>
                    </Col>
                    <Col>
                        <Button name="VNG15" btn_key="3" style={this.props.style}></Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button name="VNG15" btn_key="4" style={this.props.style}></Button>
                    </Col>
                    <Col>
                        <Button name="VNG15" btn_key="5" style={this.props.style}></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { isClick, style } = state;
    let allClick = isClick.find(click => click === false);
    if (allClick === undefined) {
        console.log("all button are clicked");
        return {
            isClick: isClick,
            style: style,
            isAllClick: true
        }
    }
    return {
        isClick: isClick
    }

}

const mapDispatchToProps = {
    reverseClickState: reverseClickState
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)