import React, { useContext } from 'react'
import './login.css'
import { authcontext } from '../contextApi/context'


const Login = () => {
const {setislogin,password,setpassword,inputvalue,setinputvalue}=useContext(authcontext)

const handleclick=()=>{
  if(inputvalue.length < 3 || password.length < 5){
    alert("username length should be greater than 3 and password length should be greater than 5")
  }else{
    
    setislogin(true)
  }
}

  return (
    <>
     <div className='loginContainer'>
        <div className='logindiv'>
          <div className='inputbox'>
            <input type="text" placeholder='username' value={inputvalue} onChange={(e)=>{
              setinputvalue(e.target.value)
            }}/>
            <input type="password" placeholder='password' value={password} onChange={(e)=>{
              setpassword(e.target.value)
            }}/>
          </div>
          <button onClick={handleclick}>login</button>
        </div>
     </div>
    </>
  )
}

export default Login;
