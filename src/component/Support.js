import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Supportf(){

    return <div>
        <h3>Support</h3>
        <Footer />
    </div>
}
export class Support extends Component{
    render(){
        return<div>
            <Nav />
            <Supportf />
        </div>
    }
}