import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function Verifiedf(){
    return <div className="verified-true-form-div">
        <div className="logo">ALIMNY</div>
        <div className="verified-true-div row justify-content-center">
        <div className="verified-true-form col-10 col-md-8 col-lg-6">
                <div className="part-1">
                    <h6>Verified</h6>
                </div>
                <div className="part-2">
                    <img src="./images/done.svg" alt="we can't find it" />
                </div>
                <div className="part-3">
                    <p>Your account has been verified</p>
                </div>
                
                <div className="part-4">
                    <Link activeClassName="selected" exact to="/home"><input id="btn2" type="submit" value="CONTINUE" /></Link>
                </div>
        </div>
        </div>
    </div>
}
export class Verified extends Component{
    state = {
        user: {name: '', password:''}
    }
    //api and cooki req

    render(){
        return(
            <Verifiedf />
        );
    }

}