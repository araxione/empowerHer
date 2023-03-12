import './Signup.css';
//import NavBar from './navbar';
import {useNavigate} from 'react-router-dom';

//images
import {FaGoogle, FaLinkedin, FaGithub} from "react-icons/fa";
import worldImage from './images/world.svg'

//fonts
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';

export const Signup = () => {
  const navigate = useNavigate();

  const navigateInterest = () => {
    // 👇️ navigate to /
    navigate('/interest');
  };

  return (
    <div className="Signup">
      <div className="hero-container">
        <img src={worldImage} alt="worldImage" className="hero-image"/>
        <div className="hero-text">
          <h1>Welcome!</h1>
          <p> Are you ready to start your journey?<br></br>
          With empowerHer, we seek to empower diverse future leaders in tech through a supportive community that enhances skills, establishes networks, and advances careers.
          </p>
          <div className="form" align="center">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input type="firstName" name="firstName" placeholder="First Name" />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="lastName" name="lastName" placeholder="Last Name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="name@email.com" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <button className="signup-btn1" onClick={navigateInterest}>Register</button>
            <div className="hr-lines"><span class="line-center">
              Or Continue With
              </span>
            </div>
            <div className="social">
              <button className="signup-btn2">
                Google
                <FaGoogle />
              </button>
              <button className="signup-btn2">
                LinkedIn
                <FaLinkedin />
              </button>
              <button className="signup-btn2">
                Github
                <FaGithub />
              </button>
            </div>
          </div>
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
