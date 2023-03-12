import './Interest.css';
import StepProgressBar from './StepProgressBar';

//fonts
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';


export const Interest = () => {
  return (
    <div className="Interest">
      <div className='Progress-bar'>
        <StepProgressBar />
      </div>
      <div className='Content'>
        <h1>01. Interests</h1>
        <br />
        <p>We would love to get to know you more! Please let us know what your interets are. Select up to 3 choices.</p>
      </div>
      <div className='Button-group'>
        <button className='Select-button'>Data Science</button>
        <button className='Select-button'>Front-End</button>
        <button className='Select-button'>Back-End</button>
        <button className='Select-button'>UX Design</button>
        <button className='Select-button'>Web Design</button>
        <button className='Select-button'>Graphic Design</button>
        <button className='Select-button'>Product Design</button>
        <button className='Select-button'>Product Management</button>
        <button className='Select-button'>Cybersecurity</button>
        <button className='Select-button'>System Analysis</button>
        <button className='Select-button'>Cloud Computing</button>
        <button className='Select-button'>Support Specialist</button>
        <button className='Select-button'>Database Administration</button>
        <button className='Select-button'>Network Engineering</button>       
      </div>
      <div className = "Direction-group">
        <button className='Direction-button'>Continue</button>
      </div>
    </div>
    
    
  );
}