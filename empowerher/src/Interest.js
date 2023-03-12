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
    </div>
    
    
  );
}