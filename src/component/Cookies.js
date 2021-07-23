import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Cookiesf(){

    return <div>
        <h3>Cookies</h3>
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