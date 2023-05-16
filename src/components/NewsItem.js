import React, { Component } from 'react'

const NewsItem=(props)=> {
    // constructor() {
    //     super();
    //     // console.log('NewsItem');
    // }
        let { title, description, imgUrl, newsUrl, author, date, name } = props;
        return (
            <>
                <div className='my-3'>
               <div className="card" style={{ width: "18rem" }}>
                    {/* <div style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        position:'absolute',
                        right:'0'
                    }}> */}

                    
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '81%'}} >{name}</span>
                    <div className="card-body">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                        <h5 className="card-title">{title}... <br></br> <span className="badge bg-success">Verified</span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-footer">
                            <small className="text-muted">By {author === null ? 'Sources' : author} on <br></br> {new Date(date).toGMTString()} </small>
                        </p>
                        <a href={newsUrl} target='_blank' className="btn btn-primary">Read More</a>
                    </div>
                    </div>
                    {/* </div> */}
                </div>
            </>
        )
}

export default NewsItem