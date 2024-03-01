import logo from '../photos/logo.png'
import hamburger from '../photos/Hamburger.png'
import shoppingcart from '../photos/shoppingcart.png'
import '../Header.css'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div className="background">
        <header className="parentflex"><img src={hamburger} className="imagemargin" alt="Click here for more options"></img><Link to="/"><img src={logo} width="200" height="50" className="imagemargin" alt="Little's Lemon Logo"></img></Link><img src={shoppingcart} className="imagemargin" alt="Shopping cart"></img></header>
        
        </div>
    )
}

export default Header