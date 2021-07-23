import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Aboutf(){

    return <div>
        <h3>about</h3>
        <Footer />
    </div>
}
export class About extends Component{
    render(){
        return<div>
            <Nav />
            <Aboutf />
        </div>
    }
}