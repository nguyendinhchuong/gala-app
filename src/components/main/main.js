import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';
import Button from '../button/button';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col>
                        <Button name="VNG15" btn_key="0"></Button>
                    </Col>
                    <Col>
                        <Button name="VNG15" btn_key="1"></Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button name="VNG15" btn_key="2"></Button>
                    </Col>
                    <Col>
                        <Button name="VNG15" btn_key="3"></Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button name="VNG15" btn_key="4"></Button>
                    </Col>
                    <Col>
                        <Button name="VNG15" btn_key="5"></Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main;