// import blogger from "/images/blogger.jpg"
// import thumb1 from "/images/postlist.jpg"
// import thumb2 from "/images/postlist1.jpg"
import { Link } from "react-router-dom";
import React from "react";
import CONSTANTS from "../Utilities/baseUrl";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.history);
    this.state = {
      blogsCount: null,
      BlogsList: [],
      User: null,
    };
    this.render = this.render.bind(this);
    this.getBloggerProfile = this.getBloggerProfile.bind(this);
    this.getBloggerProfile();
  }
  getBloggerProfile() {
    const currentUser = this.getloggedInUser();
    fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.BLOGS.USER_PROFILE}/`,
      {
        method: "POST",
        body: JSON.stringify({
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
          data.authorPost.forEach((element) => {
            element.updated_on = element.updated_on.substring(0, 10);
            element.shortContent = element.content.substring(0, 100);
          });
          this.setState({
            User: data?.user[0],
            BlogsList: data.authorPost,
            postCount: data.postCount,
          });
        }
      });
  }
  getloggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem("login"));
    console.log(loggedInUser);
    return loggedInUser?.token;
  }
  render() {
    return (
      <div>
        <div className="profileWrap">
          <div className="container">
            <p className="headingBox"> Blogger Profile</p>
            <div className="innerWrap">
              <div className="profileDesc">
                {/* <div className="profImg">
                  <img
                    src={process.env.PUBLIC_URL + "/images/blogger.jpg"}
                    alt={"blogger"}
                    className="img-fluid"
                  />
                </div> */}
                <div className="profileValues">
                  <div className="name">
                    {this.state?.User?.first_name} {this.state?.User?.last_name}
                  </div>
                  <div className="following">
                    {/* <div>
                      <p className="count">1100</p>
                      <span className="label">Followers</span>
                    </div> */}
                    <div>
                      <p className="count">{this.state.postCount}</p>
                      <span className="label">Total Posts</span>
                    </div>
                    {/* <div>
                      <p className="count">1310</p>
                      <span className="label">Following</span>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="aboutBlogger">
                <p className="heading">Description</p>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident.
                </p>
              </div> */}
              <br />
              <div className="postsLists">
                <p className="heading">List of Posts:</p>
                {this.state?.BlogsList?.length ? (
                  <div>
                    <div className="row m-0">
                      {this.state.BlogsList.map((blog) => (
                        <div className="col-12 col-md-6 col-lg-4">
                          <div class="postThumb">
                            {/* <div className="thumbImg">
                           <img
                             src="../../public//images/postlist.jpg"
                             alt={"posts"}
                             className="img-fluid"
                           />
                         </div> */}
                            <div className="thumbDesc">
                              <p className="date">
                                <span>Updated :</span>
                                {blog.updated_on}
                              </p>
                              <p className="title">{blog.title}</p>
                              <p className="desc">{blog.content}</p>
                              <Link to="/blogdetail">Read More</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p>No Post Available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
