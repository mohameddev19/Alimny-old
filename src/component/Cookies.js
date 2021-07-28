import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Cookiesf(){

    return <div>
        <div style={{padding:"5rem",paddingTop:"8rem"}}>
            <p>
            It is a platform we have built to help our
            society develop scientifically and because we have given 
            many entities<br/> an urgent need for a similar platform.<br/> 
            The current version is the first version and we will develop 
            it as soon as we have the opportunity, God willing.<br/>
            The techniques we have used are react framework and node js.<br/>
            team: 
            designer Mohammed Abdullah,<br/>
            front-end developer Mohammed Hamdi<br/>
            and node.js developers Al-Monzer Abdulaziz and Momen Daoud<br/>
            </p>
            <h6 style={{color:"#676767"}}>We're working on this page go to: <Link to="/contact">contact</Link></h6>
        </div>
        <Footer />
    </div>
}
export class Cookies extends Component{
    render(){
        return<div>
            <Nav />
            <Cookiesf />
        </div>
    }
}