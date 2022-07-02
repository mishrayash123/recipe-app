import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';


export default function Login() {
    const [LoginEmail, setaLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [sk, setsk] = useState("");
    const [sh, setsh] = useState("");

    const login = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, LoginEmail, LoginPassword).then((userCredential) => { // Signed in
            const user = userCredential.user;
            setsh("user signed in successfully")
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            setsk(errorCode);
        });
        
    };

    return (
        <div className="mt-36 ">
            <p className="mt-5 text-warning text-center">
                {sh} </p>
            <form onSubmit={login}
                className="mx-auto w-50 mt-5 bg-secondary   border border-dark border border-3 border-opacity-100 rounded">
                <h5 className="text-center m-3">Login</h5>
                <div className="m-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setaLoginEmail(e.target.value);
                            }
                        }/>
                </div>
            <div className="m-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={
                        (e) => {
                            setLoginPassword(e.target.value);
                        }
                    }/>
            </div>
            <p className="m-3">
            <Link to="/forgetpassword" className="nav-link text-warning">Forget Password</Link>
        </p>
        <p className="m-3 text-warning">
            {sk} </p>
        <p className="m-3">If you don't have an account :
            <Link to="/signup" className="nav-link text-warning">Signup</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3"
            onClick={login}>Login</button>
    </form>
</div>
    );
}
