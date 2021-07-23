import React, {Component} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

function Loginf(props){

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().required()
    });
    return <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render = {props =>{
            return <div className="log-form-div">
            <div className="logo">ALIMNY</div>
            <Form className="log-form">
                    <div className="part-1">
                        <h6>Log in</h6>
                    </div>

                    <div className="part-2">
                        <div>
                            <Field id="email" name="email" placeholder="email" />
                            <hr id="hemail" />
                        </div>
                        <div>
                            <Field id="password" type="password" name="password" placeholder="password" />
                            <hr id="hpassword" />
                        </div>
                    </div>

                    <div className="part-3">
                        <p><a>Forgot password?</a></p>
                    </div>
                    
                    <div className="part-4">
                        <input id="btn2" type="submit" value="LOG IN" />
                    </div>
                    
                    <div className="part-5">
                        Or log using:
                    </div>
                    
                    <div className="part-6">
                        <a><button>Google</button></a>
                        <a><button>Facebook</button></a>
                        <a><button>Linked in</button></a>
                    </div>

                    <div className="part-7">
                        <p>No account? <a>Join</a> Alimny now.</p>
                    </div>
                </Form>
        </div>
        }}
    />
}
export class Login extends Component{
    state = {
        user: {name: '', password:''}
    }
    //api and cooki req

    render(){
        return(
            <Loginf
                values={this.state.user}
                onSubmit={(values => console.log(values))}
            />
        );
    }

}