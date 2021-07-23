import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Privacyf(){

    return <div>
        <h3>Privacy</h3>
        <Footer />
    </div>
}
export class Privacy extends Component{
    render(){
        return<div>
            <Nav />
            <Privacyf />
        </div>
    }
}