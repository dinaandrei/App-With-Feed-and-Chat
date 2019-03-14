import React from 'react';
import TextField from '@material-ui/core/TextField';

class Login extends React.Component {

    render() {
        return (
            <div>
                <h1>I am the Login Page</h1>
                <div>
                    <TextField
                        id="standard-username-input"
                        label="Username"
                        autoComplete="current-username"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
            </div>
        );
    }
}

export default Login;