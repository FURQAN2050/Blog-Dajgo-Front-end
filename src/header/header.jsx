import "../css/front-styles.css"
import { useState } from "react";
// import homeicon from "/images/home-icon.png"
// import searchicon from "/images/search-icon.png"
// import usericon from "/images/user-icon.png"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="headWrap">
                        <div className="headleft">
                            <ul>
                                <li className="dropLinks">
                                    <Link to="#" className="toggle" onClick={(e) => setIsActive(!isActive)}>
                                        <FontAwesomeIcon icon={faBars} />
                                    </Link> 
                                    {isActive && (
                                        <ul className="dropdown" id="menu">
                                            {/* <li> <Link to="#">Profile Info</Link> </li>
                                            <li> <Link to="#">Favorite Categories</Link> </li>
                                            <li> <Link to="#">Favorite Blogs</Link> </li>
                                            <li> <Link to="#">Favorite Author</Link> </li> */}
                                            {/* <li> <Link to="#">My Posts</Link> </li> */}
                                            <li> <Link to="/newpost">New Posts</Link> </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <Link to="/">
                                        <img 
                                            src={process.env.PUBLIC_URL+"/images/home-icon.png"}
                                            alt={"icon"}
                                            className="img-fluid"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="headcenter">
                            <ul>
                                <li>
                                    <Link to="#">categories</Link>
                                </li>
                                <li>
                                    <Link to="#">authors</Link>
                                </li>
                                <li>
                                    <Link to="#">articles</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="headright">
                            <ul>
                                <li>
                                    <Link to="">
                                        <img 
                                            src={process.env.PUBLIC_URL+"/images/search-icon.png"}
                                            alt={"icon"}
                                            className="img-fluid"
                                        />
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <img 
                                            src={process.env.PUBLIC_URL+"/images/user-icon.png"}
                                            alt={"icon"}
                                            className="img-fluid"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
