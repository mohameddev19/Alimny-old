import React, { Component, useEffect } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
function Contactf(){
    const dispatch = useDispatch();
    const isstudent = useSelector((state) => state.typecase.typecase);
    const islogged = useSelector((state) => state.logcase.logcase);
    useEffect(()=>{
        //chack cooki if true then call dispatch(teacher());
        dispatch(teacher());
    }, []);
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    function tab(e){
        const id = e.target.getAttribute("data-target");
        document.getElementById("number-div").style.backgroundColor = "#ffffff";
        document.getElementById("number").style.fill = "rgba(103, 103, 103, 0.7)";
        document.getElementById("msg-div").style.backgroundColor = "#ffffff";
        document.getElementById("msg").style.fill = "rgba(103, 103, 103, 0.7)";
        document.getElementById("map-div").style.backgroundColor = "#ffffff";
        document.getElementById("map").style.fill = "rgba(103, 103, 103, 0.7)";
        if(id == "number-form"){
            document.getElementById("number-div").style.backgroundColor = "rgba(105, 139, 82, 0.4)";
            document.getElementById("number").style.fill = "#506843";
        }
        else if(id == "msg-form"){
            document.getElementById("msg-div").style.backgroundColor = "rgba(105, 139, 82, 0.4)";
            document.getElementById("msg").style.fill = "#506843";
        }
        else{
            document.getElementById("map-div").style.backgroundColor = "rgba(105, 139, 82, 0.4)";
            document.getElementById("map").style.fill = "#506843";
        }
        document.getElementById("number-form").style.display = "none";
        document.getElementById("msg-form").style.display = "none";
        document.getElementById("map-form").style.display = "none";
        document.getElementById(""+id+"").style.display = "flex";
    }
    return <div className="contact-body">
        <div className="page-div contact-div row justify-content-center">
            <div className="contact-body col-11 col-lg-8 row justify-content-center">
                <div className="btn-bar col-12 row justify-content-center">
                    <div id="number-div" className="btn col-4 row justify-content-center" data-target="number-form" onClick={tab}>
                        <svg id="number" data-target="number-form" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24">
                            <path data-target="number-form" d="M0 0h24v24H0z" fill="none" opacity=".1"/>
                            <path data-target="number-form" d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>
                        </svg>
                    </div>
                    <div id="msg-div" className="btn col-4 row justify-content-center" data-target="msg-form" onClick={tab}>
                        <svg id="msg" data-target="msg-form" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24">
                            <path data-target="msg-form" d="M0 0h24v24H0z" fill="none"/>
                            <path data-target="msg-form" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <div id="map-div" className="btn col-4 row justify-content-center" data-target="map-form" onClick={tab}>
                        <svg id="map" data-target="map-form" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path data-target="map-form" d="M0 0h24v24H0z" fill="none"/>
                        <path data-target="map-form" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                </div>
                <div className="contact-form col-12 row justify-content-center">
                    <div id="msg-form" className="msg-form col-12 row justify-content-center">
                        <div className="image-1 col-md-6 col-lg-4 row justify-content-center">
                            <h3>Get in Touch</h3>
                            <p>
                                And our team will reach out<br/> with the sloution within 24 hours
                            </p>
                            <img src="../images/Mention-bro.png" alt="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 row justify-content-center">
                            <label>
                                <p>Name <font>(first {'&'} last)</font></p><br/>
                                <div className="input-div">
                                    <input type="text" />
                                    <hr />
                                </div>
                            </label>
                            <label>
                                <p>Subject <font>(ex: some page not working)</font></p>
                                <div className="input-div">
                                    <input type="text" />
                                    <hr />
                                </div>
                            </label>
                            <label>
                                <p>Email</p>
                                <div className="input-div">
                                    <input type="text" placeholder="mail@example.com" />
                                    <hr />
                                </div>
                            </label>
                            <label>
                                <p>Phone <font>(0xxx-xxx-xxx)</font></p>
                                <div className="input-div">
                                    <input type="number" />
                                    <hr />
                                </div>
                            </label>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 row justify-content-center">
                            <label>
                                <p>Message <font>(explaining the problem)</font></p>
                                <div className="textarea-div">
                                    <textarea></textarea>
                                    <hr />
                                </div>
                            </label>
                            <div className="button">
                                <button>Submint</button>
                            </div>
                            <p className="faq">
                                Or consider visiting <Link to="/faq">FAQ</Link> page
                            </p>
                        </div>
                    </div>
                    <div id="number-form" className="number-form col-12 row justify-content-center">
                        <div className="col-12 col-md-6">
                            <h4>Customer Service Center</h4>
                            <p>You can call our Customer Service Center<br />To get help immediately.</p>
                            <h2>1607</h2>
                        </div>
                        <div className="img col-12 col-md-6">
                            <img src="../images/Contact us-bro.png" alt="contact" />
                        </div>
                    </div>
                    <div id="map-form" className="map-form col-12 row justify-content-center">
                        <p>Available Locations</p>
                        <div>
                            <h5>You can visit us on any of our following customer support center:</h5>
                            <h5>- Eastern ALKalakla, ALmashtal.</h5>
                            <h5>- ALKalakla ALlafah, ALtorkey st.</h5>
                            <h5>- Haj yousef - east Nille</h5>
                            <h5>- ALhalfaya</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
export class Contact extends Component{
    render(){
        return<div>
            <Nav />
            <Contactf />
        </div>
    }
}

/*
--this will be the return for all page function
{islogged
        ?this componant
        :<div><Login /></div>
        }
        <Footer />
*/