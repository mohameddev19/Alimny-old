import React, { Component, useEffect } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
function Coursef(){
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
    function scrollY(e){
        document.body.style.overflow = "hidden";
        /*in next line we can see js path that is new information for me :)*/
        const item = document.querySelector("#Dv > div > div > div.page-body > div.page-div.course-div.row.justif-content-center > div.page-right.col-12.col-lg-12.col-xl-7.row > div > div.ratings.row");
        if(e.deltaY > 0) item.scrollLeft += 30;
        else item.scrollLeft -= 30;
    }
    function slideR(e){
        const item = document.querySelector("#Dv > div > div > div.page-body > div.page-div.course-div.row.justif-content-center > div.page-right.col-12.col-lg-12.col-xl-7.row > div > div.ratings.row");
        item.scrollLeft += 168;
    }
    function slideL(e){
        const item = document.querySelector("#Dv > div > div > div.page-body > div.page-div.course-div.row.justif-content-center > div.page-right.col-12.col-lg-12.col-xl-7.row > div > div.ratings.row");
        item.scrollLeft -= 168;
    }
    function scrollX(e){
        let classes = e.target.className;
        classes = classes.split(' ');
        if(classes[0] != 'scroll-x'){
            document.body.style.overflowY = "scroll";
        }
    }
    return <div className="page-body" onWheel={scrollX}>
        <div className="page-div course-div row justif-content-center">

            <div className="page-right col-12 col-lg-12 col-xl-7 row">
                <h5>Adobe Illstrator fundamentals</h5>
                <div className="description">
                    <h6>description</h6>
                    <p>
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                    </p>
                </div>
                <div className="requirements">
                    <h6>requirements</h6>
                    <p>
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                        lemon lemo theft lemon lemo theft lemon lemo theft lemon lemo theft
                    </p>
                </div>
                <h6>Ratings</h6>
                <div className="div-ratings">
                    <div className="div-btn-l">
                        <button onClick={slideL} className="btn">{'<'}</button>
                    </div>
                    <div className="scroll-x ratings row" onWheel={scrollY}>
                        <div className="scroll-x">
                            <p>We'll add this feature later</p>
                            <p>be close</p>
                        </div>
                        <div className="scroll-x">

                        </div>
                        <div className="scroll-x">

                        </div>
                        <div className="scroll-x more-btn">

                        </div>
                    </div>
                    <div className="div-btn-r">
                        <button onClick={slideR} className="btn">{'>'}</button>
                    </div>
                </div>
            </div>

            <div className="page-left col-11 col-xl-3 row justify-content-center">
                <div className="nav-div row">
                    <span className="course-name col-12">
                        <p>Adobe Illstrator fundamentals</p>
                    </span>
                    <span className="lessons-number col-12">
                        <p>Lessons: <font>140</font></p>
                    </span>
                    <span className="teacher-image col-12">
                        <img className="" src="../images/me.jpg" alt="user"/>
                    </span>
                    <span className="teacher-name col-12">
                        <span>
                            <div className="name">Mohammed Abdalla</div>
                        </span>
                    </span>
                    <span className="rate col-12">
                        <img src="../images/rate.png" alt="rate" />
                        <img src="../images/rate.png" alt="rate" />
                        <img src="../images/rate.png" alt="rate" />
                        <img src="../images/rate.png" alt="rate" />
                        <img src="../images/rate.png" alt="rate" />
                    </span>
                    <span className="offline-link col-12">
                        <a className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mail" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                            <p>Do you want an offline copy?</p>
                        </a>
                        <div className="navbar-collapse collapse" id="mail">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="left-a nav-link" activeClassName="selected" exact to="/repport">Feature not available</Link></li>
                                <li>sorry</li>
                            </ul>
                        </div>
                    </span>
                    <span className="price col-12">
                        <h3>1899 SDG</h3>
                    </span>
                    <span className="add col-12">
                        <input className="sale-btn" type="button" value="Add to cart" />
                    </span>
                    <span className="add-wish col-12">
                        <a className="" >Add to wish list</a>
                    </span>
                </div>
            </div>

        </div>
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

/*
--this will be the return for all page function
{islogged
        ?this componant
        :<div><Login /></div>
        }
        <Footer />
*/

/*
--this will make a horizontal scrolling
    window.addEventListener("wheel", function(e){
        if(e.deltaY > 0) item.scrollLeft += 100;
        else item.scrollLeft = -100;
    });
*/