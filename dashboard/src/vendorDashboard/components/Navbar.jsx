import React from "react";

const Navbar = ({showLoginHandler, showRegisterHandler, showLogout, logOutHandler}) => {

const firmName = localStorage.getItem('firmName')

  return (
    <div className="navSection">
      <div className="company">Vendor Dashboard</div>
      <div className="firmName">
        <h4>Firm Name: {firmName}</h4>
      </div>
      <div className="userAuth">
      {!showLogout ?<>
      <div className="login"> <span onClick={showLoginHandler}>Login / </span></div>
      <div className="register"> <span onClick={showRegisterHandler}>Register</span></div>
     </> : <div className="logout"> <span onClick={logOutHandler}>Logout</span> </div> }     
       
      </div>
    </div>
  );
};

export default Navbar;
