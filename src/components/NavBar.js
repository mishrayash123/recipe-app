import {Transition} from "@headlessui/react";
import React, {useEffect, useState, useRef} from "react";
import {Link} from "react-router-dom";
import {signOut, onAuthStateChanged} from "firebase/auth";
import { auth,db } from "./firebase-config";
import { collection } from "firebase/firestore";
import {getDocs, } from "firebase/firestore";
import ThemeSwitchButton from "./themeSwitchButton";




const NavBar =({setfav}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ya, setya] = useState(false);
  const [st, setst] = useState("");
  const [uid, setuid] = useState("gfhjvjkbjhbh");
  const divRef = useRef()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setya(true);
          setuid(user.uid);
            setst(user.email.slice(0,1).toUpperCase());
            
        } else {
          setya(false);
          setuid("");
        }
    });
    fidata();
}, [auth.currentUser]);

const fidata = async () => {
  const colRef = collection(db,uid);
  const snapshots = await getDocs(colRef);
  const docs = snapshots.docs.map(doc => doc.data());
  setfav(docs);
  
}

const logout = async () => {
    signOut(auth).then(() => {
        alert("Successfully logout");
    }).catch((error) => {});
};



  return (
    <div className="fixed-top">
      <nav className="bg-stone-900 dark:bg-white/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img
                  className="h-14 w-14"
                  src={img1}
                  alt="Workflow"
                /> */}
              </div>
                <a className="text-white underline decoration-wavy decoration-4 italic text-2xl mb-2" href="/">Freci</a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className=" hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white  px-3 py-2 rounded-md text-sm font-medium">
                                        Home
                                    </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                <ThemeSwitchButton/>
                                <Link to="/fav" className=" hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={fidata}>
                                Favourites
                                </Link>
                                <> {
                                    ya ? (

                                        <button type="button" className="btn btn-light bg-gray-50 border-gray-50 text-red-900 font-bold rounded-full hover:border-blue-900 hover:bg-blue-900 hover:text-white"
                                            onClick={logout}>
                                            {st}</button>

                                    ) :
                                    <Link to="/login" className=" hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Log in
                                </Link>
                                } </>
                </div>
              </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={divRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </Link>
                                
                                <Link to="/fav" className="hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                Favourites
                                </Link>
                                
                                <> {
                                    ya ? (

                                        <button type="button" className="btn btn-light bg-gradient-to-r from-indigo-500 mb-2"
                                            onClick={logout}>
                                            {st}</button>

                                    ) :
                                    <Link to="/login" className="hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                                    Log in
                                </Link>
                                } </>
                                <ThemeSwitchButton/>
              </div>
            </div>
          )}
        </Transition>
      </nav>
       </div>
  );
}

export default NavBar;