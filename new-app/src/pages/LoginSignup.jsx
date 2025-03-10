import React from 'react'
import './Css/Loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignupfields">
          <input type="text" placeholder='Your name '/>
          <input type="email" placeholder='Your Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignupagree">
          <input type="checkbox" name="" id="" />
          <p>By continuing , i agree to the terms of use and privarcy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
