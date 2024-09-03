import { useEffect, useRef, useState } from "react"

function OTPInput({otpLength = 4, onOTPSubmit}) {

  const [inputData, setInputData] = useState(Array(otpLength).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  }, [])



  function handleChange (index, value = ""){
    if (isNaN(value)){
      return;
    }
    const newInputData = [...inputData];
    newInputData[index] = value.substring(value.length - 1);
    setInputData(newInputData)

    // submit trigger
    const combinedOtp = newInputData.join("");
    if (combinedOtp.length == otpLength){
      onOTPSubmit(combinedOtp);
    }

    // go to the next field 
    if (value && index < otpLength - 1 && inputRefs.current[index + 1]){
      inputRefs.current[index + 1].focus();
    }

  }

  function handleOnClick (index) {

  }

  function handleKeyDown (index, e) {
    if (e.key == "Backspace" && !inputData[index] && inputRefs.current[index - 1] && index > 0){
        inputRefs.current[index - 1].focus();
    }
  }

  console.log(inputRefs)

  return (
    <form className='input-container'>
            <h1>Enter OTP here</h1>
            <div className="otp-input">
           {inputData.map((data, i) => {
            return (
              <input key={i}  type="text" 
              value={data}
              ref={(input) => (inputRefs.current[i] = input)}
              onChange={(e) => handleChange(i, e.target.value)}
              onClick={()  => handleOnClick(i)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              />
            )
           })}
           </div>
            <button type='submit'>Submit OTP</button>
    </form>
  )
}

export default OTPInput
