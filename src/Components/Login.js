import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Login = ({ loginUser }) => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password){
           
                return toast.error("Please fill in all fields!");
        }

        const data = {
            email,password
        };

        loginUser(data);
    }

    return (
        <div className="col-md-4 mx-auto p-4 border">
            <form onSubmit={handleSubmit}>
              <h1 className="text-warning text-center my-2" style={{color: 'F5820E'}}>Log In</h1>
              <div className="form-group p-2">
                <input 
                 type="email" 
                 placeholder="Email" 
                 name="email" 
                 className="form-control"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group p-2">
                <input 
                 type="password" 
                 placeholder="Password" 
                 name="password"
                 className="form-control"
                 value={password}
                 onChange={(e) => setpassword(e.target.value)}
                 />
              </div>
              <div className="form-group p-2">
                <button type="submit" className="btn btn-block btn-warning form-control">Log In</button>
              </div>
            </form>
          </div>
          
    )
}

export default Login;