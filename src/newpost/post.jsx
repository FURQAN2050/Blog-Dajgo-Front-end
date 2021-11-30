
import React from 'react';


class Post extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.history)
        this.state = {  
            username:null,
            password:null,
            login:false,
            store:null
        }
        this.render=this.render.bind(this);
        this.login=this.login.bind(this);

    }
    render() { 
        return (
            <div>
                <div className="newPostWrap">
                    <div className="container">
                        <p className="headingBox">Write A New Post</p>
                        <div className="writePostWrap">
                            <div className="innerWrap">
                                <form action="">
                                    <div className="form-group row mb">
                                        <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Category:</label>
                                        <div className="col-md-8 col-lg-8">
                                        <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                            <option selected disabled>Select Category</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb">
                                        <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Title:</label>
                                        <div className="col-md-8 col-lg-8">
                                            <input type="text" className="form-control" id="name" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="form-group row mb">
                                        <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Post:</label>
                                        <div className="col-md-8 col-lg-8">
                                            <textarea name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <button type="submit" className="cta-btn">Submit</button>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Post;
