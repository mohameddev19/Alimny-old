import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function HelpCenterf(){

    return <div>
        <h3>HelpCenter</h3>
        <Footer />
    </div>
}
export class HelpCenter extends Component{
    render(){
        return<div>
            <Nav />
            <HelpCenterf />
        </div>
    }
}