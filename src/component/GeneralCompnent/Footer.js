import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><a href="#" style={{margin:"3rem"}}>Facebook</a></li>
                <li><a href="#" style={{margin:"3rem"}}>GitHub</a></li>
                <li><a href="#" style={{margin:"3rem"}}>Linkedin</a></li>
            </ul>
            <ul>
                <li><Link style={{margin:"3rem"}} to="/about">About us</Link></li>
                <li><Link style={{margin:"3rem"}} to="/trems">Trems of use</Link></li>
                <li><Link style={{margin:"3rem"}} to="/privacy">Privacy policies</Link></li>
            </ul>
            <ul>
                <li><Link style={{margin:"3rem"}} to="/contact">Contact us</Link></li>
                <li><Link style={{margin:"3rem"}} to="/support">Support</Link></li>
                <li><Link style={{margin:"3rem"}} to="/cookies">Cookie's policies</Link></li>
            </ul>
        </div>
    );
}
export  {Footer};