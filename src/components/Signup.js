import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';

export default function Signup() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [sy, setsy] = useState("");
    const [sg, setsg] = useState("");

    const signup = async (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, Email, Password).then((userCredential) => { // Signed in
            const user = userCredential.user;
            setsg("user signed up successfully")
        }).catch((error) => {
            const errorCode = error.code;
            setsy(errorCode);
        });
    };

    return (
        <div mt-5>
            <p className="mt-5 text-warning text-center">
                {sg} </p>
            <form onSubmit={signup}
                className=" mx-auto w-50 mt-5 bg-secondary   border border-dark border border-3 border-opacity-100 rounded">
                <h5 className="text-center m-3">Signup</h5>
                <div className="m-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }/>
                </div>
            <div className="m-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }/>
            </div>
        <p className="m-3 text-warning">
            {sy} </p>
        <p className="m-3">If you have an account :
            <Link to="/login" className="nav-link text-warning">Login</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3"
            onClick={signup}>Signup</button>
    </form>
    <div className=" mt-5">
        <h5 className=" text-center">Made ♡  by Yash</h5>
    </div>
</div>
    );
}
