import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth,db } from "./firebase-config";
import { collection } from "firebase/firestore";
import {getDocs, } from "firebase/firestore";


 function NavBar({setfav}) {
  const [ya, setya] = useState(false);
  const [st, setst] = useState("");
  const [uid, setuid] = useState("");

  
  

 


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setya(true);
        setuid(user.uid);
        setst(user.email);
       
        console.log(user);
      } else {
        setya(false)
        setuid(user.uid);
        
      }
    });
    fidata();
  }, [auth.currentUser]);

  const fidata = async () => {
    const colRef = collection(db,uid);
    const snapshots = await getDocs(colRef);
    const docs = snapshots.docs.map(doc => doc.data());
    setfav(docs);
    console.log(docs);
  }

  const logout = async () => {
    signOut(auth)
      .then(() => {
        alert("Successfully logout");
      })
      .catch((error) => {});
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link
                to= "/"
                className="nav-link text-danger active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav  ">
          <li className="nav-item mx-3">
              <Link to="/fav" className="nav-link text-danger " onClick={fidata}>
                Favourites
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/login" className="nav-link text-danger">
                Log in
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/signup" className="nav-link text-danger">
                Sign up
              </Link>
            </li>
          </ul>
          <>
            {ya ? (
              <button type="button" className="btn btn-danger" onClick={logout}>
                {st}
              </button>
            ) : null}
          </>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
