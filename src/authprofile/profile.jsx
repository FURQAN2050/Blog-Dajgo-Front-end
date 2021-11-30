// import blogger from "/images/blogger.jpg"
// import thumb1 from "/images/postlist.jpg"
// import thumb2 from "/images/postlist1.jpg"
import {Link} from "react-router-dom";

export default function Profile() {
    return (
        <div>
            <div className="profileWrap">
                <div className="container">
                    <p className="headingBox">Blogger</p>
                    <div className="innerWrap">
                        <div className="profileDesc">
                            <div className="profImg">
                                <img 
                                    src="../../public/images/blogger.jpg"
                                    alt={"blogger"}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="profileValues">
                                <div className="name">Lisa Smith</div>
                                <div className="following">
                                    <div>
                                        <p className="count">1100</p>
                                        <span className="label">Followers</span>
                                    </div>
                                    <div>
                                        <p className="count">525</p>
                                        <span className="label">Posts</span>
                                    </div>
                                    <div>
                                        <p className="count">1310</p>
                                        <span className="label">Following</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="aboutBlogger">
                            <p className="heading">Description</p>
                            <p className="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                                pariatur. Excepteur sint occaecat cupidatat non proident.
                            </p>
                        </div>
                        <div className="postsLists">
                            <p className="heading">List of Posts:</p>
                            <div className="row m-0">
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div class="postThumb">
                                        <div className="thumbImg">
                                            <img 
                                                src="../../public//images/postlist.jpg"
                                                alt={"posts"}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="thumbDesc">
                                            <p className="date"> <span>Updated :</span>Oct 20, 2021, 00:23 UST</p>
                                            <p className="title">Lorem Ipsum Sit Amet Text Type</p>
                                            <p className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do 
                                                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. 
                                            </p>
                                            <Link to="/blogdetail">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div class="postThumb">
                                        <div className="thumbImg">
                                            <img 
                                                src="../../public//images/postlist1.jpg"
                                                alt={"posts"}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="thumbDesc">
                                            <p className="date"> <span>Updated :</span>Oct 20, 2021, 00:23 UST</p>
                                            <p className="title">Lorem Ipsum Sit Amet Text Type</p>
                                            <p className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do 
                                                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. 
                                            </p>
                                            <Link to="/blogdetail">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div class="postThumb">
                                        <div className="thumbImg">
                                            <img 
                                                src="../../public//images/postlist.jpg" 
                                                alt={"posts"}
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="thumbDesc">
                                            <p className="date"> <span>Updated :</span>Oct 20, 2021, 00:23 UST</p>
                                            <p className="title">Lorem Ipsum Sit Amet Text Type</p>
                                            <p className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do 
                                                eiusmod tempor incidi dunt ut labore et dolore magna aliqua. 
                                            </p>
                                            <Link to="/blogdetail">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
