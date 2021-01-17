import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";
import M from "materialize-css";
const SignIn = ()=>{
    const history = useHistory()
    const [password,setPassword ]= useState("")
    const [email,setEmail ]= useState("")
    const PostData =()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html:"Invalid email",classes:"#c62828 red darken-3"})
            return

        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            
                password,
                email

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})

            }
            else{
                M.toast({html:"Signed in successfully",classes:"#388e3c green darken-2"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err);
        })
    
    }
    return(
        <div className="mycard">
         <div className="card auth-card input-field">
             <div className="brand-logo"> 
             <h2>Instagram</h2> 

             </div>
         
          <input 
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          />
          <button className="btn waves-effect waves-light #e91e63 pink"
          onClick={()=>PostData()}
          >
              
              Sign in
          </button>
          <h5>
              <Link to="/signup">Don't have an account? </Link>
          </h5>
      </div>
    </div>
    )
}

export default SignIn;