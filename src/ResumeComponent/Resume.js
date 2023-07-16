
import './Resume.css';

function Resume() {
  return (
  <div>
    <div class="container resume">
  <h2>My Resume</h2>
  <h3>You can download my resume for your reference and I hope that we will meet very soon! :)</h3>
  {/* <a
  href="https://timesofindia.indiatimes.com/thumb/msid-70238371,imgsize-89579,width-400,resizemode-4/70238371.jpg"
  download
 >
   <i className="fa fa-download" />
 </a> */}
  <div class="btn-center"> <a href="assets/img/res.pdf" class="hire-me"><i class="icon-download"></i> Download Resume</a>
    <h2>63kb</h2>
  </div>
</div>
  </div>
  );
}

export default Resume;
