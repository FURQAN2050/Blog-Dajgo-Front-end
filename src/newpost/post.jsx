
import React from 'react';
import CONSTANTS from '../Utilities/baseUrl';


class Post extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.history)
        this.state = {  
           categories:[],
            title: null,
            post: null,
            slug: null,
        }
        this.render=this.render.bind(this);
        this.getCategories=this.getCategories.bind(this);
        this.postCategory= this.postCategory.bind(this);

    }

    postCategory() {
        console.log('State', this.state)
       
        fetch(`${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.BLOGS.POST_BLOG}/`,{
            method:"POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            if(data.success) {
                if(this.state.title){
                    this.props.history.push('/blogsmain');
                }
            } else{
                alert('Data is invalid.');
            }
            
        });
        
    }
    getCategories(){
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
                                        <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Slug:</label>
                                        <div className="col-md-8 col-lg-8">
                                            <input type="text" onChange={(event)=>{this.setState({slug:event.target.value})}} className="form-control" id="name" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="form-group row mb">
                                        <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Title:</label>
                                        <div className="col-md-8 col-lg-8">
                                            <input type="text" onChange={(event)=>{this.setState({title:event.target.value})}} className="form-control" id="name" placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="form-group row mb">
                                        <label htmlFor="inputPassword" className="col-md-2 col-lg-2 col-form-label formlabels">Post:</label>
                                        <div className="col-md-8 col-lg-8">
                                            <textarea name="" id="" cols="30" rows="10" onChange={(event)=>{this.setState({post:event.target.value})}} ></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <button type="submit" className="cta-btn" onClick={this.postCategory}>Submit</button>
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
