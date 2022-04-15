import '../LoginAndRegister.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { login } from './loginValidations.js';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const clearErrors = () => {
        document.getElementById("loginError").innerHTML = "";
    }

    const handleSubmit = (e) => {
        clearErrors();
        e.preventDefault();
        login(username, password);
    }

    return (
            <div className="main-block" id="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputUsername2" className="form-label">Username</label>
                        <input type="username" className="form-control" id="inputUsername2" aria-describedby="usernameHelp"
                            value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword2" className="form-label">Password</label>
                        <input type="password" id="inputPassword2" className="form-control" aria-describedby="passwordHelpBlock"
                            value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button type="Login" className="btn btn-primary">Submit</button>
                    <span id="notRegistered" className="form-text"> Not registered?</span>
                    <span>
                        <Link to="/register" className="form-text"> Click here</Link>
                    </span>
                    <span className="form-text"> to regiser</span>
                    <p id="loginError" className="errorMessege"></p>
                </form>
            </div>
    );
}

export default Login;