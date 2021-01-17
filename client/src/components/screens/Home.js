import React from "react";

const Home = ()=>{
    return(
       <div className="home">

        <div className="card home-card">
             
            <h5>Maneesha</h5>
            <div className="card-image">
            <img src="https://images.unsplash.com/photo-1503876466-1fc5143eda57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"/>
        </div>
        <div className ="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6> title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder="add a comment"/>
        </div>
        </div>
        <div className="card home-card">
            <h5>Maneesha</h5>
            <div className="card-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSQoGQoYEmrdBz1CPZMxTaysJBuNv_3UA3A&usqp=CAU"/>
        </div>
        <div className ="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6> title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder="add a comment"/>
        </div>
        </div>
        <div className="card home-card">
        
            <h5>Maneesha</h5>
            <div className="card-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7LQS-n3iqNj0fcLOMbJnoz72j-CMcxN6eg&usqp=CAU"/>
        </div>
        <div className ="card-content">
        <i className="material-icons" style={{color:"red"}}>favorite</i>
            <h6> title</h6>
            <p>This is amazing post</p>
            <input type="text" placeholder="add a comment"/>
        </div>
        </div>


       </div>
    )
}

export default Home;