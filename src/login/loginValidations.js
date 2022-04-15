import MainChatNew from "../MainChatNew";
import users from "../users/users"

/*Validate the login input: Check that the username exists, and that the password is correct*/
const isValidLoginInfo = (username, password) => {
    var validInfo = false;
    const usersNum = users.length;
    var i;
    for (i = 0; i < usersNum; i++) {
        if (users[i].username == username && users[i].password == password) {
            validInfo = true;
        }
        break;
    }
    return validInfo;
}

/*Login to the main chat screen*/
export const login = (username, password) => {
    if (username == '' || password == '' || !isValidLoginInfo(username, password)) {
        document.getElementById("loginError").innerHTML = "Username or Password are invalid";
    }
    else {
        alert("logged in successfully");
        // const navigate = useNavigate();
        // navigate('/mainChat');
    }
}