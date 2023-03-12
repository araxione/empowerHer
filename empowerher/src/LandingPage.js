import './LandingPage.css';
import NavBar from './navbar';

//images
import diversityImage from './images/diversity-pic.png';
import mentorsImage from './images/mentors-pic.png';
import resourcesImage from './images/resources-pic.png';

//fonts
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';

export const LandingPage = () => {
  return (
    <div className="LandingPage">
    <div className="hero-container">
      <img src={diversityImage} alt="Picture unavailable." className="hero-image"/>
      <div className="hero-text">
      <h1>Diversity Drives Innovation</h1>
      <p>Empowering women and non-binary individuals to thrive in tech. We support underrepresented genders through mentorship and advocacy.</p>
      <button className="landing-btn1">Get Started</button>
      <button className="landing-btn2">Become A Mentor</button>
      </div>
    </div>
    <div className="hero-container1">
      <div className="hero-text">
      <h1>Mentors</h1>
      <p>Our community of mentors is comprised of experienced professionals who are passionate about supporting and empowering women in the technology industry. Our mentors come from diverse backgrounds and specialize in a wide range of areas, from cloud computing and cybersecurity to software development and design.</p>
      <button className="landing-btn1">Find Mentors</button>
      </div>
      <img src={mentorsImage} alt="Picture unavailable." className="hero-image"/>
    </div>
    <div className="hero-container">
      <img src={resourcesImage} alt="Picture unavailable." className="hero-image"/>
      <div className="hero-text">
      <h1>Access to Resources</h1>
      <p>We provide resources such as online courses, webinars, or interview practice that focus on technical skills and career development. This can help mentees build skills and knowledge that will help them advance in their careers.</p>
      <button className="landing-btn1">View Resources</button>
      </div>
    </div>
    <div className="hero-container1">
      <div className="hero-text">
      <h2>empowerHer</h2>
      </div>
    </div>
    </div>
  );
}