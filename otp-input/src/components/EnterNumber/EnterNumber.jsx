import React, { useState } from 'react'
import OTPInput from '../OTPInput/OTPInput'

function EnterNumber() {

    const [showOTP, setShowOTP] = useState(false)
    const [number, setNumber] = useState("");


    function handleNumberSubmit (e){
        e.preventDefault();
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regex.test(number)){
            setShowOTP(true);
        }
        else{
            throw new Error("Please enter a proper number");
        }
    }

    function handleOTPSubmit(otp){
        console.log("Login successfull", otp)
    }


  return (
    <div className='container'>
       { showOTP 
       ? <OTPInput otpLength={4} onOTPSubmit = {handleOTPSubmit}/>
       
       : <form className='input-container' onSubmit={handleNumberSubmit}>
            <h1>Enter Your Number</h1>
            <input placeholder='Enter number here ...' type="text" name="" id=""
            value={number}
            onChange={(e) => {setNumber(e.target.value)}}
            />
            <button type='submit'>Get OTP</button>
        </form>}
    </div>
  )
}

export default EnterNumber
