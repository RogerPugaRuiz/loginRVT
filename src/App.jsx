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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" >
        <img className="mx-auto h-10 w-auto" src={logo} alt="Logo React" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" >Magane your account</h2>
        </div>

        <form className = "text-center" onSubmit={(e) => handleSubmit(e)}>

        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <p className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Email</p>
          <input className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" />
        </div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" >
          <p className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Password</p>
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" />
        </div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" >
          <button className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" type="submit">Login</button>
          <div className="links">
            <p className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">New User?</p>
            <p className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password?</p>
          </div>
          </div>
        </form>
        <small className="text-center">&copy react</small>
        
        </>
  );
}

export default App;
