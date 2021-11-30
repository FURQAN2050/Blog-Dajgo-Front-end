import {Link} from "react-router-dom"
import Header from "../header/header"
import React from 'react';
import CONSTANTS from "../Utilities/baseUrl";


class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.history)
        this.state = { 
            blogs:[]
        }
        this.render=this.render.bind(this);
        this.getAllBlogs=this.getAllBlogs.bind(this);
        this.getAllBlogs();
    }
    getAllBlogs(){
        console.log('function called.');
        // let result=<p>no result Found</p>;
        // const history = useHistory();
        fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.BLOGS.GET_ALL_BLOGS}/`,{
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            data.forEach(element => {
                element.created_on=element.created_on.substring(0, 10);
                element.shortContent=element.content.substring(0, 35);
            });
            this.setState({blog:data})
        });
    }
    render() { 
        return(    
            <div className="blogWrap">
            <Header></Header>
        <div className="blogsMainWrap">
            <div className="container">
                <div className="blogsListing">
                    <div className="row m-0">
                        <div className="col-12 col-md-4 col-lg-4">
                            <p className="blogsLabel">Latest Posts</p>
                            {
                                this.state?.blog?.length ?
                                <div>
                                    {
                                        this.state.blog.map(blog => (
                                            <div className="lists">
                                <div className="thumb">
                                    <img 
                                        src={process.env.PUBLIC_URL+"/images/blog-thumb.jpg"}
                                        alt={"thumb"}
                                        className="img-fluid absPosition"
                                    />
                                </div>
                                <div className="detail">
                                    <p className="blogCatg">{blog.title}</p>
                                    <span className="blogDate">Date {blog.created_on}</span>
                                    <p className="blogTitle">{blog.shortContent}..</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                                          ))
                                    }
                                </div>
                            
                                :
                                <p>No blogs Found</p>
                            }
                            
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <p className="blogsLabel">Your Favorite Posts</p>
                            {
                                this.state?.blog?.length ?
                                <div>
                                    {
                                        this.state.blog.map(blog => (
                                            <div className="lists">
                                <div className="thumb">
                                    <img 
                                        src={process.env.PUBLIC_URL+"/images/blog-thumb.jpg"}
                                        alt={"thumb"}
                                        className="img-fluid absPosition"
                                    />
                                </div>
                                <div className="detail">
                                    <p className="blogCatg">{blog.title}</p>
                                    <span className="blogDate">Date {blog.created_on}</span>
                                    <p className="blogTitle">{blog.shortContent}..</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                                          ))
                                    }
                                </div>
                            
                                :
                                <p>No blogs Found</p>
                            }
                            {/* <div className="lists">
                                <div className="thumb">
                                    <img 
                                        src="../../public//images/blog-thumb-3.jpg"
                                        alt={"thumb"}
                                        className="img-fluid absPosition"
                                    />
                                </div>
                                <div className="detail">
                                    <p className="blogCatg">design</p>
                                    <span className="blogDate">Date 14 / Oct / 2021</span>
                                    <p className="blogTitle">Lorem Ipsum Dolor Sit Amet Cons Ectetur</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                            <div className="lists">
                                <div className="thumb">
                                    <img 
                                        src="../../public//images/blog-thumb-4.jpg"
                                        alt={"thumb"}
                                        className="img-fluid absPosition"
                                    />
                                </div>
                                <div className="detail">
                                    <p className="blogCatg">Trip Photography</p>
                                    <span className="blogDate">Date 14 / Oct / 2021</span>
                                    <p className="blogTitle">Lorem Ipsum Dolor Sit Amet Cons Ectetur</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div>
                            <div className="lists">
                                <div className="thumb">
                                    <img 
                                        src="../../public//images/blog-thumb-5.jpg"
                                        alt={"thumb"}
                                        className="img-fluid absPosition"
                                    />
                                </div>
                                <div className="detail">
                                    <p className="blogCatg">Trip Photography</p>
                                    <span className="blogDate">Date 14 / Oct / 2021</span>
                                    <p className="blogTitle">Lorem Ipsum Dolor Sit Amet Cons Ectetur</p>
                                    <Link to="#">Read More</Link>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-12 col-md-4 col-lg-4">
                            <p className="blogsLabel">Trending Posts</p>
                            <div className="lists trendList">
                                <div className="detail">
                                    <span className="blogDate">Date 14 / Oct / 2021</span>
                                    <p className="blogTitle">Keys to writing copy that actually convers and sells users</p>
                                    <Link to="/authprofile">Author name</Link>
                                </div>
                            </div>
                            <div className="lists trendList">
                                <div className="detail">
                                    <span className="blogDate">Date 14 / Oct / 2021</span>
                                    <p className="blogTitle">Keys to writing copy that actually convers and sells users</p>
                                    <Link to="/authprofile">Author name</Link>
                                </div>
                            </div>
                            <p className="blogsLabel">Trending Authors</p>
                            <div className="lists trendList">
                                <div className="detail">
                                    <span className="blogDate">Date 14 / Oct / 2021</span>
                                    <p className="blogTitle">Keys to writing copy that actually convers and sells users</p>
                                    <Link to="/authprofile">Author name</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
}
 
export default Main;


