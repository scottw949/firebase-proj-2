import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Register = ({registerUser}) => {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password){
            return toast.error("Please fill in all fields!");
        }
        if (password.length < 6){
            return toast.error("Password is not strong enough.");
        }

        const data = {
            email,password
        };
        registerUser(data);

        //console.log(`Register credentials ${JSON.stringify(data)}`);
    }


    return(
        <div className="col-md-4 mx-auto p-4 border">
          <form onSubmit={handleSubmit}>
              <h1 className="text-warning text-center my-2">Create Account</h1>
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
                <button type="submit" className="btn btn-block btn-warning form-control">Create Account</button>
              </div>
            </form>
          </div>
    )
}

export default Register;