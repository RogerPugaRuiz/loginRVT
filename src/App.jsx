import { useState } from "react";
import logo from "./assets/react.svg";

function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email + password);
  }
  return (
  <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-fit m-auto bg-blue-50 rounded mt-[15vh] shadow-md" >
        <img className="mx-auto h-10 w-auto animate-spin" src={logo} alt="Logo React" />
        <h2 className="mt-5 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-400" >Magane your account</h2>
        

        <form className = "text-center" onSubmit={(e) => handleSubmit(e)}>

        <div className="flex min-h-full flex-col justify-center ">
          <p className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Email</p>
          <input className=" text-center text-xl font-bold leading-9 tracking-tight text-gray-900 border border-gray-200 rounded w-fit"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" />
        </div>
        <div className="flex min-h-full flex-col justify-center mt-2" >
          <p className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Password</p>
          <input className="text-center text-xl font-bold leading-9 tracking-tight text-gray-900 border border-gray-200 rounded w-fit"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" />
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
