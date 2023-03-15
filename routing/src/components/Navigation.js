import {Link, NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";


export default function Navigation() {
    const setStyle = ({isActive})=>{
        return isActive 
       ? styles['active-link']
       : undefined
    }
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className={setStyle}><em>Home</em></NavLink></li>
        <li><NavLink to="/about" className={setStyle}>About</NavLink></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/millennium-falcon">Millennium Falcon</Link></li>
        <li><NavLink 
            to="/products/2"
        //     style={({isActive})=>({
        //     background: isActive ? "orange" : "lightgrey"
        //    })}
             className={setStyle}
            >
            Products
            </NavLink></li>
      </ul>
    </nav>
  );
}
