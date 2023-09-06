import React from "react";

export default function Daily(props) {
    

    // gotta find the way to set this shit up for the daily and 5 day
    // thoughts: get the geocoding fxn in here, also get some way to see if like...
    // the info can transfer in and i can use it in the fuckin return statement??
    // HALF BAKED THOUGHT: basically putting the fetch in the main forecast page and using
    // THAT as a way to get the info and slot it into the components; can use props on this component

    return(
        <div className="container">
            <div className="card col-lg-3">
                <div className="card-body d-flex row justify-content-center">
                    {/* <img className="card-img-top" 
                        src={props.src}
                        alt="Project preview"
                        style={styles.previewImg}
                        ></img> */}
                    <h4 className="card-title text-center my-3">Hey there</h4>
                    <div className="d-flex row justify-content-around my-2">
                        {/* `<a href={props.github} className="btn btn-primary col-5">Repository</a>
                        <a href={props.deployed} className="btn btn-primary col-5">Deployment/Preview</a>` */}
                    </div>
                </div>
            </div>
        </div>
    )
}