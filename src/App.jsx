import { useState } from "react";
import logo from "./assets/react.svg";

function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    errorEmail();
    errorPassword();
    
  }

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const errorPassword = () => {
    if(!password.trim()){
      console.log("password is empty");
      setPasswordError("Password is required");
      return;
    }else{
      setPasswordError("");
      if(password.length < 6){
        setPasswordError("Password must be at least 6 characters");
        return;
      }
    }
  }

  const errorEmail = () => {
    if(!email.trim()){
      console.log("email is empty");
      setEmailError("Email is required");
      return;
    }else{
      setEmailError("");
      if(!validateEmail(email)){
        setEmailError("Email is not valid");
        return;
      }
    }
  }
  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        errorEmail();
        break;
      case "password":
        errorPassword();
        break;
      default:
        break;
    }
  }

  const handleChanges = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  }
  return (
  <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-96 m-auto bg-blue-50 rounded mt-[15vh] shadow-md" >
        <img className="mx-auto h-10 w-auto animate-spin" src={logo} alt="Logo React" />
        <h2 className="mt-5 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-400" >Magane your account</h2>
        

        <form className = "text-center" onSubmit={(e) => handleSubmit(e)}>

        <div className="flex min-h-full flex-col justify-center ">
          <p className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Email</p>
          <input 
          name="email"
          className=" text-center text-xl font-bold leading-9 tracking-tight text-gray-900 border border-gray-200 rounded w-full"
          value={email}
          onChange={(e) => handleChanges(e)}
          onBlur={(e) => handleBlur(e)}
          type="text" />
          <div>
            <p className="text-red-500">{emailError}</p>
          </div>
        </div>
        <div className="flex min-h-full flex-col justify-center mt-2" >
          <p className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Password</p>
          <input 
          name="password"
          className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900 border border-gray-200 rounded w-full"
          value={password}
          onChange={(e) => handleChanges(e)}
          onBlur={(e) => handleBlur(e)}
          type="password" />
          <div>
            <p className="text-red-500">{passwordError}</p>
          </div>
        </div>
        <div className="flex min-h-full flex-col justify-center" >
          <button className=" text-center text-2xl font-bold leading-9 tracking-tight text-white bg-blue-400 rounded mt-2" type="submit">Login</button>
          <div className="links mt-10">
            <p className="text-center font-bold leading-9 tracking-tight text-gray-900 hover:text-blue-400 cursor-pointer">New User?</p>
            <p className="text-center font-bold leading-9 tracking-tight text-gray-900  hover:text-blue-400 cursor-pointer">Forgot Password?</p>
          </div>
          </div>
        </form>
        
    </div>
    <small className="text-center fixed bottom-0 left-0">&copy react</small>
  </>
  );
}

export default App;
