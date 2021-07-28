import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class UsedErorr extends Component{
  
  state ={
    type : '',
  };
  componentDidMount = ()=>{
    const ErorrType = this.props.match.params.type;
    this.state.type = ErorrType;
  }
  render(){
    return <div className="error-body">
        <div className="error row justif-content-center">

          <div className="col-12 title-div">
            <div className="title">
              <h6>Warning</h6>
              <p>The {this.props.match.params.type} you've entered is already in use</p>
              <input type="button" value="Accept" />
            </div>
          </div>
            
        </div>
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