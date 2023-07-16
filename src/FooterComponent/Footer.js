
import './Footer.css';

function Footer() {
  return (
    <div>
      
     
<div className="footer" href="assets/css/bootstrap-responsive.css" rel="stylesheet" type="text/css">
  <div className="container">
    <p className="pull-left"><a href="http://pawan.sangare05@gmail.com">pawan.sangare05@gmail.com</a></p>
    <p className="pull-right"><a href="#myModal" role="button" data-toggle="modal"> <i className="icon-mail"></i> CONTACT</a></p>
  </div>
</div>
<div id="myModal" className="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel"><i className="icon-mail"></i> Contact Me</h3>
  </div>
  <div className="modal-body">
    <form action="https://formspree.io/f/xwkdpekv" method="POST" className="contact-inputs">
      <input type="text" name="name" placeholder="Your Name" required autoComplete="off"/>
      <input type="text" name="email" placeholder="Your Email" required autoComplete="off"/>
      <input type="text" name="website" placeholder="Website (Optional)" autoComplete="off"/>
      <textarea  name="comment" rows="3" style={{width:80}} autoComplete="off"></textarea>
      <br/>
      <button type="submit" className="btn btn-large"><i className="icon-paper-plane"></i> SUBMIT</button>
    </form>
  </div>
</div>
    </div>
  );
}

export default Footer;
