import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

function Verificationf(props){

    const schema = Yup.object().shape({
        verification: Yup.string().required()
    });
    return <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render = {props =>{
            return <div className="verified-form-div">
            <div className="logo">ALIMNY</div>
            <div className="verified-div row justify-content-center">
            <Form className="verified-form col-10 col-md-8 col-lg-6">
                    <div className="part-1">
                        <h6>Verification</h6>
                    </div>

                    <div className="part-2">
                        <p>WE have sent you a Verification to your email <a>zoolxsd@gmail.com</a><br/> Enter the code in the text field below</p>
                    </div>

                    <div className="part-3">
                        <div>
                            <Field id="verification" name="verification" placeholder="verification code" />
                            <hr id="hverified" />
                        </div>
                    </div>
                    
                    <div className="part-4">
                        <input id="btn2" type="submit" value="Confirm" />
                    </div>
                    
                    <div className="part-5">
                        Did'nt receive the code? <a>Resend</a>
                    </div>
            </Form>
            </div>
        </div>
        }}
    />
}
export class Verification extends Component{
    state = {
        user: {name: '', password:''}
    }
    //api and cooki req

    render(){
        return(
            <Verificationf
                values={this.state.user}
                onSubmit={(values => console.log(values))}
            />
        );
    }

}