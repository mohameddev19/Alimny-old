import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
function Tremsf(){

    return <div>
        <h3>Trems</h3>
        <Footer />
    </div>
}
export class Trems extends Component{
    render(){
        return<div>
            <Nav />
            <Tremsf />
        </div>
    }
}