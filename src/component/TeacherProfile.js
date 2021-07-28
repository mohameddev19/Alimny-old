import React, { Component, useEffect } from 'react';
import {SearchNav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
function TeacherProfilef(){
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
        <div className="page-div teacher-div row justif-content-center">

            <div className="page-left col-11 col-lg-3 row justify-content-center">
                <div className="mail-div">
                </div>
                <div className="nav-div row">
                <span className="teacher-image col-12">
                        <img className="" src="../images/User-image.png" alt="user"/>
                    </span>
                    <span className="teacher col-12">
                        <span>
                            <div className="name">Mohammed Abdalla</div>
                            <div className="career">Graphic desgin</div>
                            <div className="precis">
                                some text som text some text
                                some text som text some text
                            </div>
                        </span>
                    </span>
                    <span className="media col-12">
                        <a href="www.facebook.com">
                            <img src="../images/facebook.png" alt="media" />
                        </a>
                        <a href="www.github.com">
                            <img src="../images/github.png" alt="media" />
                        </a>
                        <a href="www.linkedin.com">
                            <img src="../images/linkedin.png" alt="media" />
                        </a>
                    </span>
                </div>
                <div className="help">
                    <Link exact to="/help">Do you need help?</Link>
                </div>
            </div>

            <div className="page-right col-10 col-xl-7 row">
                <div className="catlogy-div catlogy-1">
                    <span className="catlogy">Courses</span>
                    <span className="lg-see-all"><Link  exact to="/saved">See all</Link></span>
                </div>
                {/* teacher courses here */}
                <div className="course course-12 col-12 row">
                    <div className="">
                        <img className="course-image" src="../images/adobe.jpg" alt="White-star"  />
                        <NavLink className="course-title" exact to="/course/">
                            <div className="title">Adobe Illustrator Fundmentals</div>
                            <span className="rate">
                                <span>4.6</span>
                                <img src="../images/White-star.png" alt="White-star" />
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
                </div>
                <div className="col-12 sm-see-all">
                    <span><Link exact to="/teacher/courses">See all</Link></span>
                </div>
                
                {isstudent
                ?''
                :<div className="add-div col-12">
                <button className="add-btn">Add course</button>
                </div>
                }
            </div>
        
        </div>
        <Footer />
    </div>
}
export class TeacherProfile extends Component{
    render(){
        return<div>
            <SearchNav />
            <TeacherProfilef />
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