import React from "react";

const Header = props => {
    const {search, onInputChange, onSearchClick }= props;

    return(
       <div className="jumbotron mt-1 bg-rose-900 dark:bg-black p-5 border-2 mb-5 bg-white/10 mt-4  rounded-xl border-white/10 ">
           <h1 className="display-1 text-center  dark:text-white mb-5 font-mono italic font-extrabold " >
Food Recipes</h1>
  <form onSubmit={onSearchClick}>
  <div className="input-group ">
  <input type="text" className="  mx-auto  w-75 bg-white/10 text-black border rounded-1" placeholder="Recipe's name" value={search} onChange={onInputChange} aria-label="Recipient's username" aria-describedby="basic-addon2" />
  {/* <button type="button" className=" text-black dark:bg-white btn btn-primary dark:hover:bg-red-500 border border-primary rounded-1" onClick={onSearchClick}>Search</button> */}
</div>
  </form>
  
       </div>

    );
};

export default Header;