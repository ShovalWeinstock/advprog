import './LoginAndRegister.css';
import UserIteml from './userItem/UserItem';

function Login() {
  return (
    <div class="main-block">
        <h1>Login</h1>
        <form>
            <div class="mb-3">
                <label for="InputUsername" class="form-label">Username</label>
                <input type="username" class="form-control" id="InputUsername" aria-describedby="usernameHelp"></input>
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" id="inputPassword" class="form-control" aria-describedby="passwordHelpBlock"></input>
            </div>
            <button type="Login" class="btn btn-primary" onclick="validateLogin()">Submit</button>
            <span id="notRegistered" class="form-text"> Not registered?</span>
            <span> <a href="#" class="form-text"> Click here</a> </span>
            <span class="form-text"> to regiser</span>
            <p id="invalidInfo"></p>
        </form>
  </div>
  );
}

export default Login;