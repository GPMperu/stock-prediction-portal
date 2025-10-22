import React, {useState} from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegistration = async (e) => {
    e.preventDefault();

    const userData = {username, email, password}
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log(response.data)
      console.log("User registered successfully")
      } catch (error) 
      {console.error("Registration failed", error.response.data)}
  }
  return (
    <>
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <h3 className="text-center">Create an Account</h3>
                <form onSubmit={handleRegistration}>
                  <input type="text" className="form-control mb-3" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                  <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button type="submit" className="btn btn-info d-block mx-auto">Register</button>
                  </form>
             </div>
        </div>
    </div>
    </>
  )
}

export default Register