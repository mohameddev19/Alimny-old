import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout, teacher, student} from '../../store/action';

function SearchNav(props){
    const [searchTitle, setSearchTitle] = useState('');
    const [Search, setSearch] = useState([]);
    function hanldeSearch(e){
        const search_bar = document.getElementById("search");
        setSearchTitle(search_bar.value);
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
    useEffect(()=>{
        const Searchbar = props.search;
        setSearchTitle(Searchbar);
    }, []);

    const islogged = useSelector((state) => state.logcase.logcase);
    const dispatch = useDispatch();
    function hanldeLogout(){
        //delete cooki and then
        dispatch(logout());
    }
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    return(
        <div className="navbar Search-Nav row justify-content-end">
            <div className="left-a-div col-3">
                
                {islogged
                /* this if altogther will be turn */
                ?<NavLink exact to="/login"><button className="login-btn">Log in</button></NavLink>
                :<div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <img className="user-image" src="../../images/User-image.png" alt="user"/>
                <span className="user-name">Mohammed Abdalla</span>
                </div>
                }
                
                <div className="navbar-collapse collapse" id="menu">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/setting">setting</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/class">class</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/mail">mail</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/" onClick={hanldeLogout()}>Log out</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-8">
                <img className="logo" src="../../images/Logo.png" alt="logo" />
                <span className="alimny"><NavLink exact to="/">ALIMNY</NavLink></span>
                <span className="search-span">
                    <input id="search" className="search" value={searchTitle} onChange={hanldeSearch} onKeyDown={search} type="serch" />
                    <NavLink to={"/search/" + searchTitle}><input id="search_btn" type="button" hidden /></NavLink>
                    <hr />
                </span>

            </div>
        </div>
    );
}
function HomeNav(props){

    const [searchTitle, setSearchTitle] = useState('');
    const [Search, setSearch] = useState([]);
    function hanldeSearch(e){
        const search_bar = document.getElementById("search");
        setSearchTitle(search_bar.value);
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
    useEffect(()=>{
        const Searchbar = props.search;
        setSearchTitle(Searchbar);
    }, []);

    const islogged = useSelector((state) => state.logcase.logcase);
    const dispatch = useDispatch();
    function hanldeLogout(){
        //delete cooki and then
        dispatch(logout());
    }
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    return(
        <div className="navbar home-nav row justify-content-center">
            <div className="left-a-div col-4">
                <img className="home-logo logo" src="../../images/Logo.png" alt="logo" />
                <span className="home-alimny alimny"><NavLink exact to="/">ALIMNY</NavLink></span>
                
                {islogged
                ?<div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <img className="user-image" src="../../images/User-image.png" alt="user"/>
                <span className="user-name">Mohammed Abdalla</span>
                </div>
                :<NavLink className="login" exact to="/login"><button>Log in</button></NavLink>
                }

                <div className="navbar-collapse collapse" id="menu">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/setting">setting</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/class">class</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/mail">mail</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/" onClick={hanldeLogout()}>Log out</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-6 home-r">
                <span></span>
                <span className="search-span">
                    <input id="search" className="search" value={searchTitle} onChange={hanldeSearch} onKeyDown={search} type="serch" />
                    <NavLink to={"/search/" + searchTitle}><input id="search_btn" type="button" hidden /></NavLink>
                    <hr />
                </span>

            </div>
        </div>
    );
}
function Nav(){
    const islogged = useSelector((state) => state.logcase.logcase);
    const dispatch = useDispatch();
    function hanldeLogout(){
        //delete cooki and then
        dispatch(logout());
    }
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    return(
        <div className="navbar Nav-m row justify-content-start">
            <div className="left-a-div col-3">
                
                {islogged
                /* this if altogther will be turn */
                ?<NavLink exact to="/login"><button className="login-btn">Log in</button></NavLink>
                :<div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <img className="user-image" src="../../images/User-image.png" alt="user"/>
                <span className="user-name">Mohammed Abdalla</span>
                </div>
                }

                <div className="navbar-collapse collapse" id="menu">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/setting">setting</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/class">class</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/mail">mail</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/" onClick={hanldeLogout()}>Log out</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-6">
                <img className="logo" src="../../images/Logo.png" alt="logo" />
                <span className="alimny"><NavLink exact to="/">ALIMNY</NavLink></span>

            </div>
        </div>
    );
}
function BoardNav(){
    const islogged = useSelector((state) => state.logcase.logcase);
    const dispatch = useDispatch();
    function hanldeLogout(){
        //delete cooki and then
        dispatch(logout());
    }
    useEffect(()=>{
        //chack cooki if true then call dispatch(login());
        dispatch(login());
    }, []);
    return(
        <div className="navbar bord-nav row justify-content-center">
            <div className="left-a-div col-5">
                
                {islogged
                /* this if altogther will be turn */
                ?<NavLink exact to="/login"><button className="login-btn">Log in</button></NavLink>
                :<div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <img className="user-image" src="../images/User-image.png" alt="user"/>
                <span className="user-name">Mohammed Abdalla</span>
                </div>
                }
                
                <div className="navbar-collapse collapse" id="menu">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/setting">setting</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/class">class</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/mail">mail</NavLink></li>
                        <li className="nav-item"><NavLink className="left-a nav-link" activeClassName="selected" exact to="/" onClick={hanldeLogout()}>Log out</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="col-6">
                <img className="logo" src="../images/Board-logo.png" alt="logo" />
                <span className="alimny"><NavLink exact to="/">ALIMNY</NavLink></span>

            </div>
        </div>
    );
}
export  {SearchNav,HomeNav,Nav,BoardNav};