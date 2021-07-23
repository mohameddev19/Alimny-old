import React, { Component, useEffect } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';
function UploadCoursef(){
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
        <div className="page-div upload-div row justif-content-center">

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
                <div className="col-12 name row">
                    <span className="image-chang col-12 col-lg-3 justify-content-center">
                        <span className="">
                            <img className="user-image" src="" alt="" />
                            <img className="camera" src="./images/camera.png" alt="camera" />
                            <input type="file" />
                        </span>
                    </span>
                    <span className="name-chage col-12 col-lg-9 justify-content-center">
                        <div className="input-div">
                            <input type="text" placeholder="Course name" />
                            <hr />
                        </div>
                        <div className="input-div">
                            <input type="number" placeholder="Price" />
                            <hr />
                        </div>
                    </span>
                </div>
                <div className="col-12 description row">
                    <span className="col-12 col-lg-6 justify-content-center">
                        <div className="textarea-div">
                            <textarea type="text" placeholder="Course description" ></textarea>
                            <hr />
                        </div>
                    </span>
                    <span className="col-12 col-lg-6 justify-content-center">
                        <div className="textarea-div">
                            <textarea type="text" placeholder="Course requirements" ></textarea>
                            <hr />
                        </div>
                    </span>
                </div>
                <div className="col-12 upload row justify-content-center">
                    <span className="col-12 row justify-content-center">
                        <div className="upload-btn">
                            <div className="upload-value">
                                <img src="./images/upload.png" alt="upload" />
                                <p>Upload files</p>
                            </div>
                            <input id="upload-input" className="upload-input" type="file" />
                        </div>
                    </span>
                </div>
                <div className="col-12 whiteboard row">
                    <span className="col-12 col-lg-6 row justify-content-center">
                        <Link exact to="/whiteboard">GO to Whiteboard</Link>
                    </span>
                    <span className="col-12 col-lg-6 row justify-content-center">
                        <button className="save-btn">Save</button>
                    </span>
                </div>
            </div>
        
        </div>
        <Footer />
    </div>
}
export class UploadCourse extends Component{
    render(){
        return<div>
            <Nav />
            <UploadCoursef />
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