import './App.css';
import StepProgressBar from './StepProgressBar';
const interets= [];

function Interest() {
  return (
    <div >
      <div className='Nav-bar'>
        {/* header */} INSERT NAVBAR HERE
      </div>
      <div className='Progress-bar'>
        <StepProgressBar />
      </div>
      <div className='Content'>
        <h1>01. Interests</h1>
        <p>We would love to get to know you more! Please let us know what your interets are. Select up to 3 choices.</p>
      </div>
    </div>
    
    
  );
}

export default Interest;
