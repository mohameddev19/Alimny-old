import React, {Component, useEffect, useLayoutEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../../store/action';

function Nav(){
    const islogged = useSelector((state) => state.logcase.logcase);
    const dispatch = useDispatch();
    function hanldeLogout(){
        //delete cooki and then
        dispatch(logout());
    }
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    return(
        <div className="navbar-Landing row justif-content-between">
            <div className="col-6 navbar-expand-md">
            <a className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                menu
            </a>
            <div className="navbar-collapse collapse" id="menu">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/home">HOME</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a left-a-contact nav-link" activeClassName="selected" exact to="/contact">CONTACT US</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/support">SUPORT</NavLink></li>
                    </ul>
                </div>
            </div>
            <div style={{direction:'rtl'}} className="col-6">
                {islogged
                ?<button onClick={hanldeLogout()}>Logout</button>
                :<div className="right-a-div">
                    <NavLink className="right-a" activeClassName="selected" exact to="/login"><button className="right-btn log">LOGIN</button></NavLink>
                    <NavLink className="right-a" activeClassName="selected" exact to="/signup"><button  className="right-btn sing">SIGN UP</button></NavLink>
                </div>
                }
                
                
                
            </div>
        </div>
    );
}
export  {Nav};