import './MentorList.css';

//images
import cardOne from './images/card-1.png';
import cardTwo from './images/card-2.png';
import cardThree from './images/card-3.png';
import cardFour from './images/card-4.png';
import cardFive from './images/card-5.png';
import cardSix from './images/card-6.png';

//fonts
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';

export const MentorList = () => {
  return (
    <div className="MentorList">
    <div className="hero-container">
      <div className="hero-text">
      <h1>Hi Lily!</h1>
      <p>Thank you for your responses! We understand that finding the right mentor is crucial to your success, and that's why we offer a wide range of mentors with diverse backgrounds and expertise. Based on your previous preferences, we have found some mentors who have similar backgrounds, skills, and interests. We take into account factors such as industry, location, experience, and availability to ensure that you receive the best mentor suggestions possible.</p>
      </div>
    </div>
    <div className="hero-container">
      <div className="hero-images">
      <img src={cardOne} alt="Picture unavailable." className="hero-image"/>
      </div>
      <div className="hero-img">
      <img src={cardTwo} alt="Picture unavailable." className="hero-image"/>
      </div>
      <div className="hero-img">
      <img src={cardThree} alt="Picture unavailable." className="hero-image"/>
      </div>
    </div>
    <div className="hero-container">
      <div className="hero-images">
      <img src={cardFour} alt="Picture unavailable." className="hero-image"/>
      </div>
      <div className="hero-img">
      <img src={cardFive} alt="Picture unavailable." className="hero-image"/>
      </div>
      <div className="hero-img">
      <img src={cardSix} alt="Picture unavailable." className="hero-image"/>
      </div>
    </div>
    <div className="hero-container-btns">
      <button className="btn1">Skip</button>
      <button className="btn2">Book Session</button>
    </div>
    <div className="hero-container1">
      <div className="hero-text">
      <h2>empowerHer</h2>
      </div>
    </div>
    
    </div>
    
  );
}