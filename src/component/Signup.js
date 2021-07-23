import React, {Component, useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
function Signupf(props){
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required(),
        age: Yup.string().required()
    });
    return <Formik 
        enableReinitialize={true}
        initialValues={props.values}
        onSubmit={props.onSubmit}
        validationSchema={schema}
        render = {props =>{
            return <div className="singup-form-div">
                <div className="logo">ALIMNY</div>
                <Form className="singup-form">
                    <div className="part-1">
                        <h6>sign up</h6>
                    </div>

                    <div className="part-2">
                        <div>
                            <Field id="name" name="name" placeholder="user name" />
                            <hr id="hname" />
                        </div>
                        <div>
                            <Field id="firstName" name="firstName" placeholder="first name" />
                            <hr id="hfirstName" />
                        </div>
                        <div>
                            <Field id="lastName" name="lastName" placeholder="last name" />
                            <hr id="hlastName" />
                        </div>
                        <div>
                            <Field id="email" name="email" placeholder="email" />
                            <hr id="hemail" />
                        </div>
                        <div>
                            <Field id="password" type="password" name="password" placeholder="password" />
                            <hr id="hpassword" />
                        </div>
                        <div>
                            <Field className="age" id="age" type="number" name="age" placeholder="age" />
                            <hr id="hage" />
                        </div>
                    </div>

                    <div className="part-3">
                        <p>Already have an account? <a>Log in</a>.</p>
                    </div>
                    
                    <div className="part-4">
                        <button id="btn1">NEXT</button>
                        <input id="btn2" type="submit" value="SIGN UP" />
                        <div>
                            <p>By signing up you are agreeing to the <a>terms of use</a> {"&"} <a>privacy policies</a>.</p>
                        </div>
                    </div>
                    
                    <div className="part-5">
                        Or signup using:
                    </div>
                    
                    <div className="part-6">
                        <a><button>Google</button></a>
                        <a><button>Facebook</button></a>
                        <a><button>Linked in</button></a>
                    </div>
                </Form>
            </div>
        }}
    />
}

export class Signup extends Component{
    state = {
        user: {
            name: '',
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            age:''
        }
    }
    //the next btn and how it work v_v
    componentDidMount = () =>{
        const btn1 = document.getElementById("btn1");
        const name = document.getElementById("name");
        const hname = document.getElementById("hname");
        const firstName = document.getElementById("firstName");
        const hfirstName = document.getElementById("hfirstName");
        const lastName = document.getElementById("lastName");
        const hlastName = document.getElementById("hlastName");
        const email = document.getElementById("email");
        const hemail = document.getElementById("hemail");
        const password = document.getElementById("password");
        const hpassword = document.getElementById("hpassword");
        const age = document.getElementById("age");
        const hage = document.getElementById("hage");
        const btn2 = document.getElementById("btn2");
        email.style.display = "none";
        hemail.style.display = "none";
        password.style.display = "none";
        hpassword.style.display = "none";
        age.style.display = "none";
        hage.style.display = "none";
        btn2.style.display = "none";
        btn1.onclick = ()=>{
            if(name.value == '' | firstName.value == '' | lastName.value == ''){
                alert("pleace fill the input")
            }
            else{
                btn1.style.display = "none";

                name.style.display = "none";
                hname.style.display = "none";
                firstName.style.display = "none";
                hfirstName.style.display = "none";
                lastName.style.display = "none";
                hlastName.style.display = "none";

                email.style.display = "inline-block";
                hemail.style.display = "inline-block";
                password.style.display  = "inline-block";
                hpassword.style.display  = "inline-block";
                age.style.display  = "inline-block";
                hage.style.display  = "inline-block";

                document.getElementById("btn2").style.display = "inline-block";
            }
        }
    }
    
    hanldeSingup = (values)=>{
        let age = values.age;
        if(age < 7){
            alert("come back after " + (7 - values.age) + " year/s")
        }
        else{
            //api and cooki req
        }
    }

    render(){
        return(
            <Signupf
                values={this.state.user}
                onSubmit={(values => this.hanldeSingup(values))}
            />
        );
    }

}