import logo from '../photos/logo.png'
import hamburger from '../photos/Hamburger.png'
import shoppingcart from '../photos/shoppingcart.png'
import '../Header.css'
import {Link} from 'react-router-dom'

function Header(){
    return (
        <div className="background">
        <header className="parentflex"><img src={hamburger} className="imagemargin"></img><Link to="/"><img src={logo} width="200" height="50" className="imagemargin"></img></Link><img src={shoppingcart} className="imagemargin"></img></header>
        
        </div>
    )
}

export default Header