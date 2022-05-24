import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fire from './Config/fire';
import reactLogo from './Images/react_logo.png';
import './App.css';


const App = () => {
  document.body.style.backgroundColor= '#FFCB2B15'
  console.log(fire);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  //auth checking
  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
        if (user){
          setIsLoggedIn(true);
          return setUser(user);
        }
        
    })
  },[isLoggedIn, user])

  //register user
  const registerUser = ({email,password}) => {
      fire.auth().createUserWithEmailAndPassword(email,password).then((res)=> {
        setUser(res.user);
        //isLoggedIn(true);
        return toast.success("Account created successfully!");
      }).catch((err) => {
        if(err.code === "auth/email-already-in-use"){
          return toast.warning("This email is already in use!");
        }
      });
  }

  //logn user
  const loginUser = ({email,password}) => {
    fire.auth().signInWithEmailAndPassword(email,password).then((res) => {
      setUser(res.user); 
      //isLoggedIn(true); 
      return toast.success("Log in successful!");})
    .catch((err) => {
      if(err.code === "auth/wrong-password"){
        toast.warning("Your password or email is incorrect.");
      }
      else if (err.code === "auth/user-not-found"){
        toast.warning("No user is found with this email.");
      }
    
    });

  }
  
  
//logout user
const logoutUser = () => {
  fire.auth().signOut().then(()=> {
    setIsLoggedIn(false);
    //setUser(false);
    return toast.success("logout was successful!");
  }).catch(err=>{
    toast.error("Logout was unsuccessful?");
  })
}


  return (
    <div className="container">
     <ToastContainer/>
       <h1 className="text-center py-5 display-4"> 
          <text style={{color: '#FFCB2C'}}>fire</text>
          <text style={{color: '#F5820E'}}>base </text>
        react login system</h1>


    <div className="row text-center">
      {
        isLoggedIn?(
          <>
            <h1>Welcome to the Home Page, { user.email }</h1>
            <div style={{textAlign: 'center'}}>
              <button type="button" style={{width: '250px'}}className="btn btn-warning btn-lg form-control" onClick={logoutUser}>Log Out</button>
              
            </div>
            <div>
            <img src={reactLogo} alt={reactLogo} style={{marginTop: '50px'}}/>
            </div>
            
            
          </>
          
        ) : (
          <>
        
            <Login loginUser={loginUser}></Login>

            <Register registerUser={registerUser}></Register>
          
          
          
          </>
        )
        
      }

    </div>
      
    </div>
  );
}

export default App;
