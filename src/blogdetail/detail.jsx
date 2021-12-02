// import blogimg from "/images/blogmain.jpg"
// import profile from "/images/profile.jpg"
import "../css/front-styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faUserPlus,
  faShareAlt,
  faShare,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CONSTANTS from "../Utilities/baseUrl";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      currentBlog: null,
      currentBlogComments: [],
      currentUser: null,
      commentsToBeAdded: "",
      liked: null,
      likeButtonLabel: "Like Post",
      currenUser: null,
    };
    this.render = this.render.bind(this);
    this.getloggedInUser = this.getloggedInUser.bind(this);
    this.setState({ currentUser: this.getloggedInUser() });
    this.setCurrentBlog = this.setCurrentBlog.bind(this);
    this.getblogComments = this.getblogComments.bind(this);
    this.postComments = this.postComments.bind(this);
    // this.renderlikedButton = this.renderlikedButton.bind(this);
    this.updateLike = this.updateLike.bind(this);

    this.getloggedInUser();
    this.setCurrentBlog();
    this.getblogComments();
  }
  setCurrentBlog() {
    const currentUser = this.getloggedInUser();

    fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.BLOGS.GET_SINGLE_BLOG}/`,
      {
        method: "POST",
        body: JSON.stringify({
          id: this.props?.match?.params?.id,
          user_id: currentUser?.user_id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data = []) => {
        console.log(data.is_liked);
        if (data.success) {
          let blog = data.post[0];
          blog.updated_on = blog?.updated_on?.substring(0, 10);
          this.setState({ currentBlog: blog });
          // this.state.liked = data.is_liked;
          this.setState({
            liked: data.is_liked ? true : false,
          });
        }
      });
  }
  getblogComments() {
    fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.COMMENTS.GET_POST_COMMENTS}/`,
      {
        method: "POST",
        body: JSON.stringify({
          id: this.props?.match?.params?.id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data = []) => {
        if (data?.success) {
          console.log(data.data);
          const postComments = data?.data;
          postComments.forEach((element) => {
            element.created_at = element.created_at.substring(0, 10);
          });
          this.setState({ currentBlogComments: postComments });
        }
      });
  }
  getloggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem("login"));
    console.log(loggedInUser);
    return loggedInUser?.token;
  }
  updateLike() {
    const currentUser = this.getloggedInUser();
    fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.BLOGS.LIKES}/`,
      {
        method: "POST",
        body: JSON.stringify({
          post_id: this.props?.match?.params?.id,
          user_id: currentUser?.user_id,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data = []) => {
        if (data.success) {
          this.setCurrentBlog();
        }
      });
  }
  postComments() {
    console.log(this.state.commentsToBeAdded);
    console.log(this.getloggedInUser());
    const currentUser = this.getloggedInUser();
    const currentBlogId = this.props?.match?.params?.id;
    let payload = {
      title: currentUser.first_name || "test Title",
      published: true,
      content: this.state.commentsToBeAdded,
      post_id: currentBlogId,
      user_id: currentUser?.user_id,
    };
    console.log(payload);
    if (!this.state.commentsToBeAdded) return;
    fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.COMMENTS.POST_POSTCOMMENTS}/`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.getblogComments();
        this.setState({ commentsToBeAdded: "" });
      });
  }
  render() {
    return (
      <div>
        <div className="blogDetailWrap">
          <div className="container">
            <p className="headingBox">Specific Article</p>
            <div className="detailWrap">
              <div className="row m-0">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="textWrap">
                    <p className="catgName">
                      <span className="">Category: </span>Kitchen Hacks
                    </p>
                    <p>
                      <div>
                        {
                          <div>
                            {this.state.liked ? (
                              <button
                                className="btn btn-primary"
                                onClick={this.updateLike}
                              >
                                Dislike
                                <FontAwesomeIcon icon={faThumbsDown} />
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                onClick={this.updateLike}
                              >
                                like
                                <FontAwesomeIcon icon={faThumbsUp} />
                              </button>
                            )}
                          </div>
                        }
                      </div>
                    </p>
                    <p className="catgTitle">
                      {this.state?.currentBlog?.title}
                    </p>
                    {/* Age-Old cooking Myths Busted */}
                    <p className="blogDate">
                      <span className="">Updated: </span>
                      {this.state?.currentBlog?.updated_on}
                    </p>
                    <p className="text">
                      {this.state?.currentBlog?.content}
                      {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                            fugiat nulla pariatur. */}
                    </p>
                    {/* <p className="text">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit 
                                            voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
                                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p> */}
                    {/* <p className="text">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed 
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
                                            porro quisquam est, qui dolorem.
                                        </p> */}
                    <div className="sharing">
                      <div className="wrap">
                        <span className="link">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </span>
                        <span className="label">10K</span>
                      </div>
                      <div className="wrap">
                        <span className="link">
                          <FontAwesomeIcon icon={faShareAlt} />
                        </span>
                        <span className="label">Share</span>
                      </div>
                      <div className="wrap">
                        <span className="link">
                          <FontAwesomeIcon icon={faUserPlus} />
                        </span>
                        <span className="label">Follow Author</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="imgWrap">
                    <img
                      src={process.env.PUBLIC_URL + "/images/blogmain.jpg"}
                      alt={"img"}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>{/* {this.renderlikedButton} */}</div>
            <div className="commentsSection">
              <p className="heading">Comments:</p>
              <form action="">
                <div className="textBox">
                  <textarea
                    onChange={(event) => {
                      this.setState({ commentsToBeAdded: event.target.value });
                    }}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write a comment..!"
                  ></textarea>
                  <button
                    type="submit"
                    className="cta-btn"
                    onClick={this.postComments}
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
            <div className="reviewSection">
              <div className="reviewWrap">
                {/* <div className="profile">
                  <img
                    src={process.env.PUBLIC_URL + "/images/profile.jpg"}
                    alt={"img"}
                    className="img-fluid"
                  />
                </div> */}

                {this.state?.currentBlogComments?.length ? (
                  this.state.currentBlogComments.map((blogComment) => (
                    <div className="comments">
                      <div className="name mb-2">
                        <p className="replier">
                          {blogComment.author.first_name}{" "}
                          {blogComment.author.last_name}
                        </p>
                        {/* <p>
                          <span className="label">Reply</span>
                          <span className="link">
                            <FontAwesomeIcon icon={faShare} />
                          </span>
                        </p> */}
                      </div>
                      <p className="date">
                        <span>Posted on :</span>
                        {blogComment.created_at}
                      </p>
                      <p className="reply">{blogComment.content}</p>
                    </div>
                  ))
                ) : (
                  <p>No Comments Added yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
