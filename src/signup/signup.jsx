// import logo from "/images/university-logo.png"
import {Link} from "react-router-dom";
import React from 'react';
import CONSTANTS from "../Utilities/baseUrl";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.history)
        this.state = {  
            username:null,
            password:null,
            password2:null,
            email:null,
            first_name:null,
            last_name:null,
            is_author:null
        }
        this.render=this.render.bind(this);
        this.signup=this.signup.bind(this);
    }
    signup(){
        console.log(this.state);
        fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.AUTHENTICATION.SIGNUP}/`,{
            method:"POST",
            body:JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.username===this.state.username){
                alert('Registration has been Completed.Please Login');
                this.props.history.push('/login');
            }else{
                alert(JSON.stringify(data));
            }
        });
    }
    render() { 
        return (
            <div className="loginWrap signupWrap">
                <div className="container">
                    <div className="header-wrap">
                        <div className="row m-0">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="leftCol">
                                    <div className="">
                                        <p className="headingBox">Sign Up Information</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-12 col-md-7 col-lg-7">
                            <div className="leftCol">
                                <div className="signUpFields">
                                        <div className="form-group row mb">
                                            <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">User Name:</label>
                                            <div className="col-md-8 col-lg-8">
                                                <input type="text" className="form-control" id="name" onChange={(event)=>{this.setState({username:event.target.value})}} placeholder=""></input>
                                            </div>
                                        </div>
                                        <div className="form-group row mb">
                                            <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">First Name:</label>
                                            <div className="col-md-8 col-lg-8">
                                                <input type="text" className="form-control" id="name" onChange={(event)=>{this.setState({first_name:event.target.value})}} placeholder=""></input>
                                            </div>
                                        </div>
                                        <div className="form-group row mb">
                                            <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Last Name:</label>
                                            <div className="col-md-8 col-lg-8">
                                                <input type="text" className="form-control" id="name" onChange={(event)=>{this.setState({last_name:event.target.value})}} placeholder=""></input>
                                            </div>
                                        </div>

                                        <div className="form-group row mb">
                                            <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Email:</label>
                                            <div className="col-md-8 col-lg-8">
                                                <input type="email" onChange={(event)=>{this.setState({email:event.target.value})}} className="form-control" id="email" placeholder=""></input>
                                            </div>
                                        </div>
                                        <div className="form-group row mb">
                                            <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Password:</label>
                                            <div className="col-md-8 col-lg-8">
                                                <input type="password" className="form-control" onChange={(event)=>{this.setState({password:event.target.value})}} id="passowrd" placeholder=""></input>
                                            </div>
                                        </div>
                                        <div className="form-group row mb">
                                            <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Confirm Password:</label>
                                            <div className="col-md-8 col-lg-8">
                                                <input type="password" className="form-control" onChange={(event)=>{this.setState({password2:event.target.value})}} id="passowrd" placeholder=""></input>
                                            </div>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" onChange={(event)=>{this.setState({is_author :event.target.value })}} id="exampleCheck1"></input>
                                            <label className="form-check-label formlabels" htmlFor="exampleCheck1">Sign up as an author/blogger</label>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 col-lg-3">
                                                <Link to="/" className="cta-btn">Back</Link>
                                            </div>
                                            <div className="col-md-3 col-lg-3">
                                               
                                                <button  className="cta-btn" onClick={this.signup}>Sign Up</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img 
                    src={process.env.PUBLIC_URL+"/images/university-logo.png"}
                    alt={"logo"}
                    className="img-fluid absPosition"
                />
                
            </div>
        )
    }
}
 
export default Signup;
