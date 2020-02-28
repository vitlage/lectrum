import React, {Component} from 'react';

//const Login = () => {
//    const emailText = "Type here your email";
//    const passwordText = "Type here your password";
//    const searchStyle = {
//        fontSize: "22px",
//        display: "block"
//    };
//    return  (
//        <form>
//            <input placeholder = {emailText} style={searchStyle} />
//            <input placeholder = {passwordText} style={searchStyle} />
//            <button>Login</button>
//        </form >
//    );
//};
//
//export default Login;

export default class Login extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    };

    componentDidMount() {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        console.log("name: ", name);
        console.log("email: ", email);
        console.log("password: ", password);

        this.setState({ name, email, password });
    }

    onChangeForm = (event) => {
        const inputData = event.target;

        this.setState({
            [inputData.name]: inputData.value
        });
    };

    onSubmitForm = (e) => {
        e.preventDefault();

        if(this.state.email === localStorage.getItem('email') &&
            this.state.password === localStorage.getItem('password')) {
            console.log("Logged In true");
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <label>
                    User Name: <input name="email" value={this.state.user} onChange={this.onChangeForm} className="form-control"/>
                </label>
                <label>
                    User Name: <input name="password" value={this.state.user} onChange={this.onChangeForm} className="form-control"/>
                </label>
                <button type="submit">Log In</button>
            </form>
        );
    }
}