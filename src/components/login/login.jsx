import React, { useEffect } from "react";
import loginImg from "../../login.svg";
import { useSelector,useDispatch } from 'react-redux';
import {datas} from "../../Data/data"
// const userDate = require("../../Data/data")
import { useHistory } from "react-router";
import { message } from "antd";

 export const Login=(props)=>{
    
  const data = useSelector(state => state);
  // console.log("redux state => ",data)
  const history=useHistory()

  const [details,set_details]=React.useState({
    username:"",
    password:""
  })

 

  const login_update =()=>{
    // dispatch(login({username:"bipund",password:"Bipund@123"}))
    console.log("details",details)
    if(details.username!=""&&details.password!=""){
      history.push("/home")
      localStorage.setItem("Login","Y")
    }else{
      message.error("please enter Details to login")
    }

  } 


    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" value={details.username} onChange={(text)=>{set_details({...details,username:text.target.value})}} name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" value={details.password} onChange={(text)=>{set_details({...details,password:text.target.value})}} name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={()=>{login_update()}}>
            Login
          </button>
        </div>
      </div>
    );
}

// export default Login;