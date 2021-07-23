import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
function Profilef(){

    return <div>
        <h3>Profile</h3>
        <Footer />
    </div>
}
export class Profile extends Component{
    render(){
        return<div>
            <Nav />
            <Profilef />
        </div>
    }
}