import React, { Component, useEffect } from 'react';
import {SearchNav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';

export class Search extends Component{
    state ={
        search : []
    };
    componentDidMount = ()=>{
        const Search = this.props.match.params.id;
    }
    render(){
        return <div className="page-body">
            <div className="page-div search-div row justif-content-center">

                <div className="page-left col-11 col-lg-3 row justify-content-center">
                    <div className="mail-div">
                    </div>
                    <div className="nav-div row">
                        <div className="col-12">
                            <Link className="left-items" exact to="/class">
                                <img src="./images/grid.png" alt="grid" />
                                Classes
                            </Link>
                        </div>
                        <div className="col-12">
                            <Link className="left-items" exact to="/setting">
                                <img src="./images/grid.png" alt="grid" />
                                Setting
                            </Link>
                        </div>
                        <div className="col-12">
                            <Link className="left-items" exact to="/class">
                                <img src="./images/grid.png" alt="grid" />
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
                        <span className="catlogy">Search</span>
                        <span className="lg-see-all"><Link  exact>See <font>+12</font></Link></span>
                    </div>
                    {/* teacher courses here */}
                    <div className="course course-12 col-12 row">
                        <div className="">
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
                    </div>
                    <div className="col-12 sm-see-all">
                        <span><Link exact to="/teacher/courses">See <font>+12</font></Link></span>
                    </div>
                </div>
            
            </div>
            <Footer />
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