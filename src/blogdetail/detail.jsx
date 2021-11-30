// import blogimg from "/images/blogmain.jpg"
// import profile from "/images/profile.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUserPlus, faShareAlt, faShare } from '@fortawesome/free-solid-svg-icons'

export default function Detail() {
    return (
        <div>
            <div className="blogDetailWrap">
                <div className="container">
                    <p className="headingBox">Specific Article</p>
                    <div className="detailWrap">
                        <div className="row m-0">
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="textWrap">
                                    <p className="catgName"><span className="">Category: </span>Kitchen Hacks</p>
                                    <p className="catgTitle">Age-Old cooking Myths Busted</p>
                                    <p className="blogDate"><span className="">Updated: </span>Oct 20, 2021, 00:23 UST</p>
                                    <p className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                        fugiat nulla pariatur.
                                    </p>
                                    <p className="text">
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
                                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                                        ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                    </p>
                                    <p className="text">
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
                                        quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                                        porro quisquam est, qui dolorem.
                                    </p>
                                    <div className="sharing">
                                        <div className="wrap">
                                            <span className="link"><FontAwesomeIcon icon={faThumbsUp} /></span>
                                            <span className="label">10K</span>
                                        </div>
                                        <div className="wrap">
                                            <span className="link"><FontAwesomeIcon icon={faShareAlt} /></span>
                                            <span className="label">Share</span>
                                        </div>
                                        <div className="wrap">
                                            <span className="link"><FontAwesomeIcon icon={faUserPlus} /></span>
                                            <span className="label">Follow Author</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <div className="imgWrap">
                                <img 
                                    src="../../public//images/blogmain.jpg" 
                                    alt={"img"}
                                    className="img-fluid"
                                />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="commentsSection">
                        <p className="heading">Comments:</p>
                        <form action="">
                            <div className="textBox">
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write a comment..!"></textarea>
                                <button type="submit" className="cta-btn">Submit Now</button>
                            </div>
                        </form>
                    </div>
                    <div className="reviewSection">
                        <div className="reviewWrap">
                            <div className="profile">
                                <img 
                                    src="../../public//images/profile.jpg"
                                    alt={"img"}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="comments">
                                <div className="name mb-2">
                                    <p className="replier">Lisa Smith</p>
                                    <p>
                                        <span className="label">Reply</span>
                                        <span className="link"><FontAwesomeIcon icon={faShare} /></span>
                                    </p>
                                </div>
                                <p className="date"><span>Updated :</span>Oct 20, 2021, 00:23 UST</p>
                                <p className="reply">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <div className="reviewWrap">
                            <div className="profile">
                                <img 
                                    src="../../public//images/profile.jpg" 
                                    alt={"img"}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="comments">
                                <div className="name mb-2">
                                    <p className="replier">Lisa Smith</p>
                                    <p>
                                        <span className="label">Reply</span>
                                        <span className="link"><FontAwesomeIcon icon={faShare} /></span>
                                    </p>
                                </div>
                                <p className="date"><span>Updated :</span>Oct 20, 2021, 00:23 UST</p>
                                <p className="reply">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
