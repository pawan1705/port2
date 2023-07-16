
import './Nav.css';
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>
      <div className="navbar">
  <div className="navbar-inner">
    <div className="container"> <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </a> <a className="brand" href="/"><img src="assets/img/user.jpg" alt=""/></a>
      <ul className="nav nav-collapse pull-right">
        <li><Link to="/" className="active"><i className="icon-user"></i> Profile</Link></li>
        <li><Link to="/skill"><i className="icon-trophy"></i> Skills</Link></li>
        <li><Link to="/about"><i className="icon-picture"></i> About</Link></li>
        <li><Link to="/resume"><i className="icon-doc-text"></i> Resume</Link></li>
      </ul>
      <div className="nav-collapse collapse"></div>
    </div>
  </div>
</div>


    </div>
  );
}

export default Nav;
