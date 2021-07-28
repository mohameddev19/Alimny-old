import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function NotFoundf(){

    return <div className="not-found-body">
        <div className="not-found row justif-content-center">

          <div className="col-12 logo">
            <h4>ALimny.</h4>
          </div>

          <div className="col-12 title-div">
            <div className="title">
              <h1>Erorr 404!</h1>
              <p>page not found</p>
              <p>Consider checking your connection then try again later</p>
            </div>
          </div>
            
        </div>
    </div>
}
export class NotFound extends Component{
    render(){
        return<div>
            <NotFoundf />
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