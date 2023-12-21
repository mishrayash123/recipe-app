import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from './firebase-config';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {FcGoogle} from "react-icons/fc";


export default function Login() {
    const [LoginEmail, setaLoginEmail] = useState("");
    const [LoginPassword, setLoginPassword] = useState("");
    const [sk, setsk] = useState("");
    

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.languageCode = 'it';
    provider.setCustomParameters({'login_hint': 'user@example.com'});

    const sum = async (event) => {
        signInWithPopup(auth, provider).then((result) => { // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => { // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    };

    const login = async (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, LoginEmail, LoginPassword).then((userCredential) => { // Signed in
            const user = userCredential.user;
            alert("user signed in successfully")
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            setsk(errorCode);
        });
        
    };

    return (
        <div className="mt-36">
        
            <form onSubmit={login}
                className="mx-auto w-50 mt-5  bg-gradient-to-r from-zinc-900 via-pink-900 to-zinc-900 dark:bg-white/10  border border-light border border-3 border-opacity-10 rounded mb-32">
                <h5 className="text-center m-3 text-white">Log in</h5>
                <a className=" btn  text-1xl text-center text-light bg-light  bg-opacity-10  w-100 flex items-center justify-center" rel="noreferrer noopener" onClick={sum}>
                    Log in with
                    <span className="mx-1 text-3xl">
                        <FcGoogle/>
                    </span>
                </a>
                <h5 className="text-center m-3 text-light text-2xl">OR</h5>
                <div className="m-3">
                    <label className="form-label text-white">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={
                            (e) => {
                                setaLoginEmail(e.target.value);
                            }
                        }/>
                </div>
            <div className="m-3">
                <label className="form-label text-white">Password</label>
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
        <p className="m-3 text-white">If you don't have an account :
            <Link to="/signup" className="nav-link text-warning">Sign up</Link>
        </p>
        <button type="submit" className="btn btn-dark m-3 hover:bg-blue-900 dark:hover:bg-fuchsia-900"
            onClick={login}>Log in</button>
    </form>
    <div className="bg-gradient-to-r from-zinc-900 via-pink-900 to-zinc-900 border border-light border  border-opacity-10 fixed-bottom" >
        <div className="w-20 mx-auto ">
      <a className="nav-link hover:text-white" target="_blank"  href="https://github.com/mishrayash123/recipe-app"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-github m-1 mx-4" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg></a>
      </div>
      <div className="mb-1">
    <h5 className=" text-center text-light mt-1 mb-1 italic ">Copyright © 2022 • Yash Kumar Mishra</h5>
      </div>
      
  </div>
</div>
    );
}
