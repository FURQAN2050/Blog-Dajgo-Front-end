// import catg1 from "/images/catg1.png"
// import catg2 from "/images/catg2.png"
// import catg3 from "/images/catg3.png"
// import catg4 from "/images/catg4.png"
// import catg5 from "/images/catg5.png"
// import catg6 from "/images/catg6.png"
// import catg7 from "/images/catg7.png"
// import catg8 from "/images/catg8.png"



export default function Favorites() {
    return (
        <div>
            <div className="favoritesWrap">
                <div className="container">
                    <p className="headingBox">Choose Your Favourite Categories</p>
                    <div className="catgsWrap">
                        <form action="">
                            <div className="row m-0">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg1"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg1">
                                        <img 
                                            src="../../public//images/catg1.png"
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Fashion</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg2"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg2">
                                        <img 
                                            src="../../public//images/catg2.png"
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Food</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg3"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg3">
                                        <img 
                                            src="../../public//images/catg3.png" 
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Travel</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg4"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg4">
                                        <img 
                                            src="../../public//images/catg4.png" 
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Music</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg5"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg5">
                                        <img 
                                            src="../../public//images/catg5.png"
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Lifestyle</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg6"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg6">
                                        <img 
                                            src="../../public//images/catg6.png" 
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Fitness</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg7"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg7">
                                        <img 
                                            src="../../public//images/catg7.png"
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">Sports</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="catgThumb">
                                        <input type="checkbox" className="form-check-input" id="catg8"></input>
                                        <label className="form-check-label formlabels" htmlFor="catg8">
                                        <img 
                                            src="../../public//images/catg8.png" 
                                            alt={"catg"}
                                            className="img-fluid"
                                        />
                                        </label>
                                        <p className="title">DIY</p>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="cta-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
