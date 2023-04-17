import {useState} from "react";
import styles from "./Header.module.scss";
import { Link,NavLink} from "react-router-dom";
import { FaShoppingCart,FaTimes} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { getAuth, signOut } from "firebase/auth";
import {auth} from "../../firebase/config"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <Link to="/cart">
      Cart
      <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);

const activeLink=(
  ({isActive})=>(isActive ? `${styles.active}`:"")
)


function Header() {
  // for hamburgar
  const [showMenu,setShowMenu]=useState(false);
  const navigate=useNavigate()
  const toogleMenu=()=>{
    setShowMenu(!showMenu)
  }

  const hideMenu=()=>{
    setShowMenu(false);
  }

  const logoutUser=()=>{
    signOut(auth).then(() => {
    toast.success("Logout Successfully")
    navigate("/login")
  
  }).catch((error) => {
    toast.error(error.message)
  });
  
  }
  return (
    <header>
      <div className={styles.header}>
        {logo}

        <nav className={showMenu?`${styles["show-nav"]}`:`${styles['hide-menu']}`}>
          <div className={showMenu?`${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`:`${styles["nav-wrapper"]}`}
          onClick={hideMenu}
          >
          </div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={20}
               color="#fff"
              onClick={hideMenu}
              />
            </li>
            <li>
              <NavLink to="/" 
              className={activeLink}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact"
              className={activeLink}
              >Contact Us</NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}
          onClick={hideMenu}
          >
            <span className={styles.links}>
              <NavLink to="/login"
              className={activeLink}
              >Login</NavLink>
              <NavLink to="/register"
              className={activeLink}
              >Register</NavLink>
              <NavLink to="/order-history"
              className={activeLink}
              >My Orders</NavLink>
              <NavLink to="/"
              onClick={logoutUser}
              >Logout</NavLink>
            </span>
            {cart}
          </div>
        
        </nav>

        {/* for hamburgur */}
        <div className={styles["menu-icon"]}>
          { cart }
          <HiOutlineMenuAlt3 size={28}
          onClick={toogleMenu}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
