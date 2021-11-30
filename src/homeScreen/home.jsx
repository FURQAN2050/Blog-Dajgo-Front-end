// import logo from "/images/university-logo.png"
import {Link} from "react-router-dom";
import React from 'react';


class Home extends React.Component {
    render() { 
        return (
            <div className="loginWrap">
                <div className="container">
                    <div className="header-wrap">
                    <div className="row m-0">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="leftCol">
                                <div className="">
                                    <p className="headingBox">
                                        blog Platform
                                    </p>
                                    <p className="white-text">A Common platform for Ub to speak their heart out!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="rightCol">
                                <Link to="/login" className="cta-btn">Login</Link>
                                <Link to="/signup" className="cta-btn">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="section2">
                        <div className="row m-0">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="leftCol">
                                    <ul className="list">
                                        <li>Features 100+ blog on cartegories of your interests</li>
                                        <li>Become an author and speak what you believe in</li>
                                        <li>Follow all the updates and News about UB</li>
                                        <li>Features Articles about all the clubs in UB and speak what you believe in!</li>
                                    </ul>
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
 
export default Home;