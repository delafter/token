import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
 import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
    return (
        <div className="text-center mt-5">
            <h1>login</h1>
            <p> You need to login to access the content</p>

            <form>
                <div className="container">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                </div>

                </form>

            
            <Link to="/">
                <button>Go to home</button>
            </Link>
            <br />
            <Link to="/private">
                <button>Login</button>
            </Link>
        </div>
    );
}

