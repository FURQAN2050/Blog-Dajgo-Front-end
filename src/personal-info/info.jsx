// import logo from "/images/university-logo.png"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
    return (
        <div className="loginWrap infoWrap">
            <div className="container">
                <div className="header-wrap">
                    <div className="row m-0">
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className="leftCol">
                                <div className="">
                                    <p className="headingBox">Personal Information</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="infoFields signUpFields">
                    <div className="row m-0">
                        <div className="col-12 col-md-6 col-lg-6">
                            <form>
                                <div className="form-group row mb">
                                    <label htmlFor="inputPassword" className="col-md-4 col-lg-4 col-form-label formlabels">About Us:</label>
                                    <div className="col-md-7 col-lg-7">
                                        <input type="text" className="form-control" id="" placeholder=""></input>
                                    </div>
                                </div>
                                <div className="form-group row mb">
                                    <label htmlFor="inputPassword" className="col-md-4 col-lg-4 col-form-label formlabels">What Made You Take Up Blogging:</label>
                                    <div className="col-md-7 col-lg-7">
                                        <textarea name="" id="" ></textarea>
                                    </div>
                                </div>
                                <div className="form-group row mb interests">
                                    <label htmlFor="inputPassword" className="col-md-4 col-lg-4 col-form-label formlabels">Upload Picture:</label>
                                    <div className="col-md-3 col-lg-3">
                                        <label htmlFor="uploadImg" className="fileLabel">
                                            <FontAwesomeIcon icon={faUpload} />
                                            CHOOSE</label>
                                        <input type="file" accept=".jpg, .png" id="uploadImg"></input>
                                    </div>
                                </div>
                                <div className="row">
                                        <div className="col-md-3 col-lg-3">
                                            <Link to="/signup" className="cta-btn">Back</Link>
                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                            <Link to="/favorite" className="cta-btn">Done</Link>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <img 
                src="../../public/images/university-logo.png"
                alt={"logo"}
                className="img-fluid absPosition"
            />
        </div>
    )
}
