import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';


export default function Useradd() {
   let [name, setName]= useState('')
    let [email, setEmail] = useState('')
    let [phonenumber, setPhonenumber] = useState('')
    let [password, setPassword] = useState('')
    let [role, setRole] = useState('')
    let [address, setAddress] = useState('')
    let [islogin, setLogin]=useState(false);
    let navigate=useNavigate();


  



    let register = (event) => {
    event.preventDefault();
    let newuser = { name, email, phonenumber, password, role, address }
    axios.post("http://localhost:8080/user/addUser", newuser)
        .then((response) => {
            if (response.status === 200) {
                alert("Registration successful");
                setName('');
                setEmail('');
                setPhonenumber('');
                setPassword('');
                setRole('');
                setAddress('');
            }
        })
        .catch((error) => { 
            console.error("Error occurred:", error);
            alert("Registration failed. Please try again.");
        });
}




    let loginuser = (event) => {
        event.preventDefault();
        let logindata = { name, password };
    
         axios.post("http://localhost:8080/user/login", logindata)

        // axios.post(`${app}/user/login`,logindata)
            .then((response) => {
                console.log("Response:", response.data);
                if (response.data) {
                    
                    localStorage.setItem("userdata", JSON.stringify(response.data))
                    var Registerform = JSON.parse(localStorage.getItem("userdata"))
                    
                    if(Registerform.role === "Admin") {
                        navigate("/NavBarAdmin");
                    } else {
                        navigate("/NavBarUser");
                    }
                    alert("Login Successful!");
                } else {
                    alert("Invalid credentials");
                }
            })
            .catch((error) => {
                console.error("Error Occurred:", error);
                alert("Login failed. Please try again.");
            });
    };

  return (


    

    <div className="form-container">
        {islogin==false?
<form onSubmit={register} className="form">
      Enter Name <input type='text' placeholder='enter user name' onChange={(e) => { setName(e.target.value) }} value={name}></input>
      Enter Email <input type='Email' placeholder='enter Email' onChange={(e) => { setEmail(e.target.value) }} value={email}></input>
      Enter PhoneNumber<input type='number' placeholder='enter mobile' onChange={(e) => { setPhonenumber(e.target.value) }} value={phonenumber}></input>
    Enter Address <input type='text' placeholder='enter user name' onChange={(e) => { setAddress(e.target.value) }} value={address}></input>
      Enter Password <input type='password' placeholder='enter password' onChange={(e) => { setPassword(e.target.value) }} value={password}></input>
            Role<select onChange={(e) => { setRole(e.target.value) }} value={role}>
                <option>Select Role</option>
                <option>Admin</option>
                <option>User</option>
            </select>
     <input type='submit' className="btn btn-outline-success"  value="Submit"></input>
     <input type='submit' value="login" onClick={()=>setLogin(true)}></input>
     </form>:null}





     {islogin?
             <form onSubmit={loginuser} className="form">
                <label>Enter Username:</label>
                <input type="text" placeholder="Enter Unique Name" onChange={(e) => setName(e.target.value)} value={name} /><br />

                <label>Enter Password:</label>
                <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />

                
              <button type='submit'>Login</button>
                <button type="submit" value="login" onClick={()=>setLogin(false)}>New user</button>
        </form>:null}
    </div>
  )
}
