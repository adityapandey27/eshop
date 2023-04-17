import React from 'react'
import styles from "./auth.module.scss"
import restImg from "../../assets/forgot.png";
import { Link } from 'react-router-dom';
import Card from '../../Components/card/Card';
function Reset() {
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={restImg} alt="" width="400"></img>
      </div>
      <Card>
      <div className={styles.form}>
        <h2>Reset Password</h2>
        <form>
          <input type="text" placeholder='Email'
          required
          ></input>
          <button className='--btn --btn-danger --btn-block'>
          Reset Password
        </button>
        <div className={styles.links}>
          <p>
            <Link to="/login">Login</Link>
          </p> <p>
            <Link to="/register">Register</Link>
          </p>
        </div>
        </form>
       
        
        
      </div>
      </Card>
    </section>
  )
}

export default Reset