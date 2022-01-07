import React,{ useState } from "react";
import axios from "axios";

export default function App() {
  return(
    <>
    <MyComponent />
    </>
  );
}

function MyComponent() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const addUser =  () =>{
    const url = "http://localhost:4000/add-user";
    const data ={
      username:username,
      password:password,
    };
     axios.post(url,data);
     setUsername("");
     setPassword("");
  };


  return(
    <div>
      <h1>User Registration</h1>
      <div>
        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter username" />
      </div>
      <div>
        <input type="text" value={password} onChange={handlePasswordChange} placeholder="Enter password" />
      </div>
      <div>
        <input type="button" value="Register" onClick={addUser} />
      </div>
    </div>
  )
}