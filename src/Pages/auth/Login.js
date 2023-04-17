import {useState} from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import {FaGoogle} from "react-icons/fa"
import Card from "../../Components/card/Card";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

// signin using email and password
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "../../Components/loader/Loader";
function Login() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [isLoading,setIsLoading]=useState(false)
  const navigate=useNavigate()

  const loginUser=(e)=>{
    e.preventDefault()
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setIsLoading(false)
    toast.success("Login Successful...")
    navigate("/")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });

  }
  return (
    <>
    {
      isLoading && <Loader/>
    }
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="" width="400"></img>
      </div>
      <Card>
      <div className={styles.form}>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <input type="text" placeholder="Email" required
           value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password" placeholder="Password" required
            value={password} onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button
            className="--btn --btn-primary
            --btn-block
            "
            type="submit"
          >
            Login
          </button >
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
          <p> --or--</p>
        </form>
        <button
          className="--btn --btn-danger
            --btn-block
            "
        >
         <FaGoogle color="#fff"/> Login With Google
        </button>
        <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to='/register'>Register</Link>
        </span>
      </div>
      </Card>
    </section>
    </>
  );
}

export default Login;
