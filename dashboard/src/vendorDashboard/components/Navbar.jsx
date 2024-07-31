import React from "react";

const Navbar = ({showLoginHandler, showRegisterHandler, showLogout, logOutHandler}) => {
  return (
    <div className="navSection">
      <div className="company">Vendor Dashboard</div>
      <div className="userAuth">
      {!showLogout ?<>
      <span onClick={showLoginHandler}>Login / </span>
      <span onClick={showRegisterHandler}>Register</span>
      </> : <span onClick={logOutHandler}>Logout</span>  }     
       
      </div>
    </div>
  );
};

export default Navbar;
