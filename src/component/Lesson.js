import React, { Component, useEffect } from 'react';
import {Nav} from './GeneralCompnent/Nav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from './../store/action';

function Lessonf(){
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

    function openInput(e){
        const q_id = e.target.innerHTML;
        document.getElementById(""+ q_id +"").style.display = "flex";
    }
    function closeInput(e){
        document.getElementById(""+ e +"").style.display = "none";
    }
    function sendInput(e){
        
    }

    return <div className="page-body">
        <div className="page-div lesson-div row justify-content-center">

            <div className="page-right col-10 col-lg-6 row">
                <div className="video col-12">
                    <video src="../../images/video.mp4" controls="show" />
                </div>
                <div className="video-title col-12">
                    <h6>What is Adobe?</h6>
                    <p>
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe
                        we will andrestand a lot of things about Adobe

                    </p>
                </div>
            </div>
        
            <div className="page-left col-12 row justify-content-center">
                <div className="comments-div ">
                    <div className="comments-title">Comments</div>
                    <div className="comments">
                        <span className="wh">
                            <img className="wh-image" src="../../images/User-image.png" alt="user" />
                            <span className="">
                                <div className="wh-title">
                                    <h6>Mohammed Abdalla</h6>
                                    <p>
                                        i can't understand how PS20 work with AI
                                    </p>
                                    <button className="wh-btn" onClick={openInput}>q1</button>
                                </div>
                            </span>
                        </span>
                        <span className="wh answer">
                            <img className="wh-image" src="../../images/User-image.png" alt="user" />
                            <span className="">
                                <div className="wh-title">
                                    <h6>Mohammed Abdalla</h6>
                                    <p>
                                        i can't understand how PS20 work with AI
                                    </p>
                                    <button className="wh-btn" onClick={openInput}>q1</button>
                                </div>
                            </span>
                        </span>
                        <span className="wh teacher-answer">
                            <img className="wh-image" src="../../images/User-image.png" alt="user" />
                            <span className="">
                                <div className="wh-title">
                                    <h6>Mohammed Abdalla</h6>
                                    <p>
                                        i can't understand how PS20 work with AI
                                    </p>
                                    <button className="wh-btn" onClick={openInput}>q1</button>
                                </div>
                            </span>
                        </span>
                        <span id="q1" className='wh-input'>
                            <textarea type='text' placeholder='answr the question'></textarea>
                            <div className="send-btn">
                                <input className="close-btn" type="button" value="close" onClick={()=>closeInput("q1")} />
                                <input type="button" value="send" />
                            </div>
                        </span>
                    </div>
                    <div className="comments">
                        <span className="wh">
                            <img className="wh-image" src="../../images/User-image.png" alt="user" />
                            <span className="">
                                <div className="wh-title">
                                    <h6>Mohammed Abdalla</h6>
                                    <p>
                                        i can't understand how PS20 work with AI
                                    </p>
                                    <button className="wh-btn" onClick={openInput}>q2</button>
                                </div>
                            </span>
                        </span>
                        <span id="q2" className='wh-input'>
                            <textarea type='text' placeholder='answr the question'></textarea>
                            <div className="send-btn">
                                <input className="close-btn" type="button" value="close" onClick={()=>closeInput("q2")} />
                                <input type="button" value="send" />
                            </div>
                        </span>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </div>
}

export class Lesson extends Component{
    render(){
        return<div>
            <Nav />
            <Lessonf />
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