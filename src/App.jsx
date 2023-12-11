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
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" className="container">
        <img class="mx-auto h-10 w-auto" src={logo} alt="Logo React" />
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" >Magane your account</h2>
        </div>

        <form class = "text-center" onSubmit={(e) => handleSubmit(e)}>

        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"className="inputContainer">
          <p class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Email</p>
          <input class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" />
        </div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" className="inputContainer">
          <p class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Password</p>
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" />
        </div>
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8" className="bottomForm">
          <button class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" type="submit">Login</button>
          <div className="links">
            <p class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">New User?</p>
            <p class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forgot Password?</p>
          </div>
          </div>
        </form>
        <small class="text-center" className="copyright">&copy react</small>
        
        </>
  );
}

export default App;
