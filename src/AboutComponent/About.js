import {Link} from 'react-router-dom'
import './About.css';

function About() {
  return (
 <div>
  <div class="container work" >
    <div style={{float:'left'}}>
  <h2>About me</h2>
  <ul style={{fontSize:22,fontWidth:"bolder",float:'left'}}>
  <li>
      <div>SOFTWARE DEVELOPER</div>
    </li>
    <li>
      <div>WRITER</div>
    </li>
    <li>
      <div>PHILOSOPHER</div>
    </li>
    <li>
      <div>TRAVELOR</div>
    </li>
  </ul>
  </div>

    <div style={{float:'RIGHT',marginLeft:150}}>
  <h2>Education</h2>
  <ul style={{fontSize:22,fontWidth:"bolder"}}>
  <li>
      <div>MCA - SAGE UNIVERSITY INDORE</div>
    </li>
    <li>
      <div>B.SC. - BARKATULLAH VISHWAVIDHYALAYA BHOPAL</div>
    </li>
    <li>
      <div>12TH - MPBSE BHOPAL</div>
    </li>
    <li>
      <div>12TH - MPBSE BHOPAL</div>
    </li>
  </ul>
  </div>
</div>


 </div>
  );
}

export default About;
