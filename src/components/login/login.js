import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect, Route } from 'react-router-dom';
import '../responsive.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: "",
            isLogin: false,
            flow: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            domain: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        if (this.state.domain === "chuongnd") {
            this.setState({
                isLogin: true,
                flow: 1
            })
        } else if (this.state.domain === "") {
            console.log("input empty");
        }
    }
    render() {
        let { isLogin } = this.state;
        if (isLogin) return <Redirect to="/main" />
        return (
            <Form className="login-box" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="domain">Your domain:</Label>
                    <Input type="text" name="domain" id="v_domain" placeholder="Ex: chuongnd" onChange={this.handleChange} />
                    <Button type="submit">Login</Button>
                </FormGroup>
            </Form>
        )
    }
}
export default Login;