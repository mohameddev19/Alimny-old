import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
function Coursef(){

    return <div>
        <h3>Course</h3>
        <Footer />
    </div>
}
export class Course extends Component{
    render(){
        return<div>
            <Nav />
            <Coursef />
        </div>
    }
}