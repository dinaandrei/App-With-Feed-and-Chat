import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>I am the Home Page for User: </h1>
                <div>
                    <Button variant="contained" color="primary" component={Link} to="login">Sign In</Button>
                </div>
                <div>
                    <Button variant="contained" color="secondary" component={Link} to="register">Sign Up</Button>
                </div>
            </div>
        );
    }
}

export default Home;