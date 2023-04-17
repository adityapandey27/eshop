import React from "react";
import styles from "./auth.module.scss";
import Card from "../../Components/card/Card";
import registering from "../../assets/register.png";
import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase/config"
// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../Components/loader/Loader";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading,setIsLoading]=useState(false)

  const navigate=useNavigate()
  const registerUser=(e)=>{
    // to prevent page reload
    e.preventDefault();
    // Using react Toastify
    if(password!==cPassword)
    {
        toast.error("Password do not match")
    }
    // jab ye true ho tab koi loader dikha do
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    // agr user mil gaya tha false krde
    setIsLoading(false)
    toast.success("Registration Successful....")
    navigate("/login")
  })
  .catch((error) => {
    toast.error(error.message)
    setIsLoading(false)
  });
  }
  return (
    <>
      {
        isLoading && <Loader/>
      }
    <section className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <h2>Register</h2>
          <form onSubmit={registerUser}>
            <input type="text" placeholder="Email" required 
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password" required 
            value={password} onChange={(e)=>{setPassword(e.target.value)}}
            />
            <input type="password" placeholder="Confirm Password" required 
            value={cPassword} onChange={(e)=>{setCPassword(e.target.value)}}
            />
            <button type="submit"
              className="--btn --btn-primary
            --btn-block
            "
            >
              Register
            </button>
          </form>

          <span className={styles.register}>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className={styles.img}>
        <img src={registering} alt="" width="400"></img>
      </div>
    </section>
    </>
  );
}

export default Register;
