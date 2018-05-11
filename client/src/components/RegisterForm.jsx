import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class RegisterForm extends Component {
    constructor(props) {
        super(props)
            this.state = {
             username: '',
             password: '',
             email: '',
             pic_url: ''
             }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        };


    handleInputChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.onSubmit(this.state.username);
        this.setState({
            username: '',
            password: '',
            email: '',
            pic_url: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <h1>Create Account</h1>
            <label>
                <h3>User Name</h3>
                <textarea
                type='text'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChange}
                />
                </label>
                <label>
                    <h3>Email</h3>
                    <textarea
                    type='text'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    <label>
                    <h3>Password</h3>
                    <textarea
                    type='text'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    <label>
                    <h3>Pic URL</h3>
                    <textarea
                    type='text'
                    name='pic_url'
                    value={this.state.pic_url}
                    onChange={this.handleInputChange}
                    />
                    </label>
                    <button type='submit'>REGISTER</button>
                    </form>
        )
    }
}
export default RegisterForm;
