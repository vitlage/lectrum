import React, {Component} from 'react';

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: ''
    };

    onChangeForm = (event) => {
        const inputData = event.target;

        this.setState({
            [inputData.name]: inputData.value
        });

        if(inputData.name === "password"){
            if(inputData.value.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,./-]).{8,}$/)){
                this.setState({
                    error: ''
                });
            } else {
                this.setState({
                    error: 'Error: (Min 8 symbols letters, numbers, punctuation, and upper and lower case'
                });
            }
        }
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    };

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <label>
                    Your Name: <input name="name" value={this.state.user} onChange={this.onChangeForm} className="form-control" />
                </label>
                <label>
                    Your Email: <input name="email" value={this.state.user} onChange={this.onChangeForm} className="form-control" />
                </label>
                <label>
                    Your Password:
                    <input name="password" type="password" value={this.state.user} onChange={this.onChangeForm} className="form-control" />
                    <span style={{color: "red"}}>{this.state.error}</span>
                </label>
                <button type="submit">Sign In</button>
            </form>
        );
    }
}