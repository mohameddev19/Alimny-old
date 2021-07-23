import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Contactf(){

    return <div>
        <h3>Contact</h3>
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