import './Interest.css';
import StepProgressBar from './StepProgressBar';
import { useState } from "react";
import styled from "styled-components";


//fonts
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';

const Button = styled.button`
  padding: 20px 10px 20px 10px;
  margin: 0px 20px 20px 20px;
  border-radius: 12px;
  border-width: 1px;
  background-color: white;
  font-family: "Poppins-bold";
  &:hover{
    background-color: #FDE8EB;
  }
`;

const ButtonToggle = styled(Button)`
  ${({ active }) =>
    active &&
    `
    background-color: #FDE8EB; 
  `}
`;



const interests = [
  "Data Science",
  "Front-End",
  "Back-End",
  "UX Design",
  "Web Design",
  "Graphic Design",
  "Product Design",
  "Product Management",
  "Cybersecurity",
  "System Analysis",
  "Cloud Computing",
  "Support Specialist",
  "Database Administration",
  "Network Engineering",
];

function ButtonGroup() {
  const [active, setActive] = useState();
  console.log(active);

  return (
    <>
      {interests.map((interest) => (
        <ButtonToggle active={active === interest} onClick={() => setActive(interest)}>{interest}</ButtonToggle>
      ))}
    </>
  );


}


export const Interest = () => {

  return (
    <>
      <div className='Progress-bar'>
        <StepProgressBar />
      </div>
      <div className='Content'>
        <h1>01. Interests</h1>
        <br />
        <p>We would love to get to know you more! Please let us know what your interets are. Select up to 3 choices.</p>
      </div>
      <div className='Button-group'>
        <ButtonGroup />
      </div>
      <div className="Direction-group">
        <button className='Direction-button'>Continue</button>
      </div>
    </>


  );
}