import React from "react";
import './Interest.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
 
class StepProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={25}
        filledBackground="#FFB6C1"
        height={20}
        stepPositions={[25,50,75,100]}
      >
        <Step 
        transition="scale"
        position={25}>
          {({ accomplished }) => (
            <div class="circle-one">1</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div class="circle-two">2</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div class="circle-three">3</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div class="circle-four">4</div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;