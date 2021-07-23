import React, { Component, useState } from 'react';
import {Nav} from './GeneralCompnent/LandingNav';
import {Footer} from './GeneralCompnent/Footer';
import {Link, NavLink} from 'react-router-dom';
function Landingf(){

    const[Search, setSearch] = useState("");
    function hanldeSearch(){
        const search_bar = document.getElementById("search");
        setSearch(search_bar.value);
    }
    function search(){
        const btn = document.getElementById("search_btn");
        const search_bar = document.getElementById("search");
        hanldeSearch();
        search_bar.addEventListener("keydown", (z) =>{
            if(z.key == "Enter"){
                btn.click();
            }
        });
        
    }
    return <div className="Landing">
        <div className="top-bar">
            <h3>First educational</h3>
            <h3>Website in Sudan {"&"} Africa</h3>
            <div className="btn-div">
                <button className="l-btn">Get Started</button>
                <button className="r-btn">About Us</button>
            </div>
            <div>
                <input id="search" value={Search} onChange={hanldeSearch} onKeyDown={search} type="serch" />
                <Link to={"/search/" + Search}><input id="search_btn" type="button" hidden /></Link>
            </div>
        </div>
        <div className="courses recommended row">
            <h3 className="col-12">Recommended Courses</h3>
            <div className="course row col-12 justify-content-center">
                <div className="col-10 col-md-5 col-lg-3">c</div>
                <div className="col-10 col-md-5 col-lg-3">c</div>
                <div className="col-10 col-md-5 col-lg-3">c</div>
            </div>
        </div>
        <div className="courses best row">
            <h3 className="col-12">Best selling Courses</h3>
            <div className="course row col-12 justify-content-center">
                <div className="col-10 col-md-5 col-lg-3">c</div>
                <div className="col-10 col-md-5 col-lg-3">c</div>
                <div className="col-10 col-md-5 col-lg-3">c</div>
            </div>
        </div>
        <div className="courses categories row">
            <h3 className="col-12">Categories</h3>
            <div className="course row col-12 justify-content-center">
                <div className="col-5 col-md-3 col-lg-2">c</div>
                <div className="col-5 col-md-3 col-lg-2">c</div>
                <div className="col-5 col-md-3 col-lg-2">c</div>
                <div className="col-5 col-md-3 col-lg-2">c</div>
                <div className="col-5 col-md-3 col-lg-2">c</div>
                <div className="col-5 col-md-3 col-lg-2">c</div>
            </div>
        </div>
        <div className="see-all-div">
            <button>See all</button>
        </div>
        <Footer />
    </div>
}
class Landing extends Component{
    /*
        state = {
            users: []
        }
        componentDidMount = () =>{
            getCourses().then(response =>{
                this.setState({
                    users: response.data
                });
            });
        }  
    */ 
    render(){
        return <div>
            <Nav />
            <Landingf />
        </div>
    }
}
export  {Landing};