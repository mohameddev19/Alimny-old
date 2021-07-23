import React, { Component, useEffect } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
function Lessonsf(){
    const dispatch = useDispatch();
    const isstudent = useSelector((state) => state.typecase.typecase);
    const islogged = useSelector((state) => state.logcase.logcase);
    useEffect(()=>{
        //chack cooki if true then call dispatch(teacher());
        dispatch(teacher());
    }, []);
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    return <div className="page-body">
        <div className="page-div see-div lessons-div row justif-content-center">

            <div className="shadow col-12 row justify-content-center">
                <div className="edit-div col-10 col-lg-5 row">
                    <span className="l-d col-12 col-lg-4">
                        <div className="input-div">
                            <input type="text" placeholder="Lesson name" />
                            <hr />
                        </div>
                        <div className="input-div">
                            <input type="number" placeholder="Lesson arranging" />
                            <hr />
                        </div>
                    </span>
                    <span className="col-12 col-lg-6">
                        <div className="textarea-div">
                            <textarea type="text" placeholder="Lesson description" ></textarea>
                            <hr />
                        </div>
                    </span>
                    <span className="col-12 row justify-content-center">
                        <button className="close-btn">Close</button>
                        <button className="save-btn">Save</button>
                    </span>
                </div>

            </div>

            <div className="page-left col-11 col-lg-3 row justify-content-center">
                <div className="mail-div">
                </div>
                <div className="nav-div row">
                <span className="teacher-image col-12">
                        <img className="" src="./images/User-image.png" alt="user"/>
                    </span>
                    <span className="teacher col-12">
                        <span>
                            <div className="name">Mohammed Abdalla</div>
                            <div className="career">Graphic desgin</div>
                            <div className="precis">Rate it !</div>
                        </span>
                    </span>
                    <span className="rate col-12">
                        <img src="./images/rate.png" alt="rate" />
                        <img src="./images/rate.png" alt="rate" />
                        <img src="./images/rate.png" alt="rate" />
                        <img src="./images/rate.png" alt="rate" />
                        <img src="./images/rate.png" alt="rate" />
                    </span>
                </div>
                <div className="help">
                    <Link exact to="/help">Do you need help?</Link>
                </div>
            </div>

            <div className="page-right col-10 col-xl-7 row">
                <div className="catlogy-div catlogy-1">
                    <span className="catlogy">Lessons</span>
                </div>
                {/* teacher courses here */}
                <div className="course course-12 col-12 row">
                    <div className="">
                        <img className="edit" src="./images/edit.png" alt="edit" />
                        <img className="course-image" src="./images/adobe.jpg" alt="White-star"  />
                        <NavLink className="course-title" exact to="/course/">
                            <div className="title">Adobe Illustrator Fundmentals</div>
                            <span className="rate">
                                <span>4.6</span>
                                <img src="./images/White-star.png" alt="White-star" />
                            </span>
                        </NavLink>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        
        </div>
        <Footer />
    </div>
}
export class Lessons extends Component{
    render(){
        return<div>
            <Nav />
            <Lessonsf />
        </div>
    }
}

/*
--this will be the return for all page function
{islogged
        ?this componant
        :<div><Login /></div>
        }
        <Footer />
*/