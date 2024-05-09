import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Private = () => {
    return (
        <div className="text-center mt-5">
            <h1>private</h1>
            <p> You are logged in</p>
           
            <Link to="/">
                <button>Go to home</button>
            </Link>
          {/*   <button onClick={() => actions.logout()}>Logout</button> */}
        </div>

       

    );
}


export default Private;