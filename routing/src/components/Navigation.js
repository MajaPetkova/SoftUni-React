import {Link} from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><em>Home</em></Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/millennium-falcon">Millennium Falcon</Link></li>
        <li><Link to="/products/2">Products</Link></li>
      </ul>
    </nav>
  );
}
