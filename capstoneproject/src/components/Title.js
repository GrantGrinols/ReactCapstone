import '../Title.css'
import titleimage from '../photos/images3.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'



function Title(){
    return (
        <div className="backgroundColor">
            <div className="AlignLeft backgroundColor Height parentflex"><div>
            <span className="TitleText">Little Lemon</span><br/><span className="SubTitleText">Chicago</span><span className="LeadText"><br/>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</span>
            <br/><br/>
            <div className="btn btn-primary ButtonPosition">
            <Link to="/Order"><span className="BlackText">Reserve a Table</span></Link>
            </div>
            </div>
        
        
        <div className="Height"><div className="Center"><img src={titleimage} width="150" height="250" alt="A picture of a chef preparing one of our famous recipes"/></div></div>
        </div>
        </div>
    )
}

export default Title