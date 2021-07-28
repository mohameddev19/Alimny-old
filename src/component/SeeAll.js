import React, { Component, useEffect } from 'react';
import {SearchNav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';

function SeeAllf(){
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
        <div className="page-div see-div row justif-content-center">

            <div className="page-left col-11 col-lg-3 row justify-content-center">
                <div className="mail-div">
                </div>
                <div className="nav-div row">
                    <div className="col-12">
                        <Link className="left-items" exact to="/class">
                            <img src="../../images/grid.png" alt="grid" />
                            Classes
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-items" exact to="/setting">
                            <img src="../../images/grid.png" alt="grid" />
                            Setting
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-items" exact to="/class">
                            <img src="../../images/grid.png" alt="grid" />
                            AFQ
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-last" exact to="/class">
                            <p>countinue last course</p>
                            <button>Adobe Illustrator Fundmentals</button>
                        </Link>
                    </div>
                </div>
                <div className="help">
                    <Link exact to="/help">Do you need help?</Link>
                </div>
            </div>

            <div className="page-right col-10 col-xl-7 row">
                <div className="catlogy-div catlogy-1">
                    <span className="catlogy">catlogy</span>
                </div>
                {/* teacher courses here */}
                <div className="course course-12 col-12 row">
                    <div className="">
                        <img className="course-image" src="../../images/adobe.jpg" alt="White-star"  />
                        <NavLink className="course-title" exact to="/course/">
                            <div className="title">Adobe Illustrator Fundmentals</div>
                            <span className="rate">
                                <span>4.6</span>
                                <img src="../../images/White-star.png" alt="White-star" />
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
export class SeeAll extends Component{
    render(){
        return<div>
            <SearchNav />
            <SeeAllf />
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