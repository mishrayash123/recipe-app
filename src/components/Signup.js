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
        <div className="mt-36 mb-56">
            <p className="mt-5 text-warning text-center">
                {sg} </p>
            <form onSubmit={signup}
                className=" mx-auto w-50 mt-5 bg-gradient-to-r from-rose-900 via-fuchsia-900 to-purple-900   border border-dark border border-3 border-opacity-100 rounded">
                <h5 className="text-center m-3 text-white">Signup</h5>
                <div className="m-3">
                    <label className="form-label text-white">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }/>
                </div>
            <div className="m-3">
                <label className="form-label text-white">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                    onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }/>
            </div>
        <p className="m-3 text-warning">
            {sy} </p>
        <p className="m-3 text-white">If you have an account :
            <Link to="/login" className="nav-link text-warning">Login</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3"
            onClick={signup}>Signup</button>
    </form>
    
</div>
    );
}
