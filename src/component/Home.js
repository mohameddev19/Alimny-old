import React, { Component, useEffect } from 'react';
import {HomeNav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
function Homef(){
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
        <div className="page-div row justif-content-center">
            
            <div className="page-left col-3 row justif-content-center">
                <div className="mail-div">
                    <div className="mail-d row">
                        <span className="user-sm-image col-2">
                            <img className="" src="../images/User-image.png" alt="user"/>
                        </span>
                        <span className="user col-6">
                            <span>
                                <div className="name">Mohammed Abdalla</div>
                                <div className="career">Graphic desgin</div>
                            </span>
                        </span>
                        <span className="mail col-3">
                            <a className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mail" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                                <img className="mail-image" src="../images/mail.png" alt="user"/>
                            </a>
                            <div className="navbar-collapse collapse" id="mail">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item"><Link className="left-a nav-link" activeClassName="selected" exact to="/repport">welcome! we'll add this feature later</Link></li>
                                    <li>no more</li>
                                </ul>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="nav-div row">
                    <div className="col-12">
                        <Link className="left-items left-green" exact to="/class">
                            <img src="../images/grid.png" alt="grid" />
                            Classes
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-items" exact to="/setting">
                            <img src="../images/grid.png" alt="grid" />
                            Setting
                        </Link>
                    </div>
                    <div className="col-12">
                        <Link className="left-items" exact to="/class">
                            <img src="../images/grid.png" alt="grid" />
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

            <div className="page-right col-10 col-xl-7 row justif-content-center">
                <div className="catlogy-div catlogy-1">
                    <span className="catlogy">Continue Learning</span>
                    <span className="lg-see-all"><Link  exact to="/saved">See all</Link></span>
                </div>
                {/* saved courses here */}
                <div className="course course-8 col-12 row">
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
                </div>
                <div className="col-12 sm-see-all">
                    <span><Link exact to="/saved">See all</Link></span>
                </div>
                <div className="catlogy-div catlogy-2">
                    <span className="catlogy">Recommended Courses</span>
                    <span className="lg-see-all"><Link exact to="/recommended">See all</Link></span>
                </div>
                {/* recommended courses here */}
                <div className="course course-4 col-12 row">
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className="col-12 sm-see-all">
                    <span><Link exact to="/recommended">See all</Link></span>
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
export class Home extends Component{
    render(){
        return<div>
            <HomeNav />
            <Homef />
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