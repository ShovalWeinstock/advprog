import './LoginAndRegister.css';
import { useState } from "react";
import { register } from './Validations.js';
//import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import defauldImg from './defaultImage.jpg';


function Registration() {

    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const clearErrors = () => {
        document.getElementById("usernameErrors").innerHTML = "";
        document.getElementById("passwordErrors").innerHTML = "";
        document.getElementById("confirmationErrors").innerHTML = "";
    }

    const handleSubmit = (e) => {
        clearErrors();
        e.preventDefault();
        register(username, nickname, password, confirmation);
    }

    // const imageHandler = (e) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         // image = reader.result;
    //         if (reader.readyState === 2) {
    //             image = reader.result;
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0]);
    //     console.log(image);
    // }

    // add reguired to all input tags (except nickname) ? then the errors don't appear on the screen..
    // <img src={image} id="img" className="img" />

    return (
        <div className="main-block">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username*</label>
                    <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp"
                        value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <p id="usernameErrors" className="errorMessege"></p>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputNickname" className="form-label">Nickname</label>
                    <input type="nickname" className="form-control" id="inputNickname" aria-describedby="nicknameHelp"
                        value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password*</label>
                    <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock"
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <p id="passwordErrors" className="errorMessege"></p>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password*</label>
                    <input type="password" id="confirmPassword" className="form-control" aria-describedby="passwordHelpBlock"
                        value={confirmation} onChange={(e) => setConfirmation(e.target.value)}></input>
                    <p id="confirmationErrors" className="errorMessege"></p>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must contain:<br></br>
                        - At least 8 characters<br></br>
                        - At least one lowercase<br></br>
                        - At least one uppercase<br></br>
                        - At least one number<br></br>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Image</label>
                    <input className="form-control" type="file" id="formFile" accept="image/*"></input>
                </div>
                <div className="mb-3">
                </div>
                <button type="Submit" className="btn btn-primary">Submit</button>
            </form >
        </div >
    );
}

export default Registration;



