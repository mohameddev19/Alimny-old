import React, { Component } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
function MyCoursesf(){

    return <div>
        <h3>MyCourses</h3>
        <Footer />
    </div>
}
export class MyCourses extends Component{
    render(){
        return<div>
            <Nav />
            <MyCoursesf />
        </div>
    }
}