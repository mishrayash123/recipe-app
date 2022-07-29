import React from "react";

const Wishes = props => {
    let time = new Date().getHours();
    


    return (

        <div className="w-75 mx-auto">
        <div className="  dark:text-white font-mono italic font-extrabold   text-2xl ml-3.5 mt-28 bg-gray-50 dark:bg-black">
            <>{
                time >= 0 && time < 12 ? <h1>
                    Good morning 🌅</h1> : time >= 12 && time < 18 ? <h1>Good afternoon ☀️</h1> : time >= 18 && time < 23.59 ? <h1>Good evening 🌇</h1> : null
            } </>

        </div>
        </div>
    );
};


export default Wishes;