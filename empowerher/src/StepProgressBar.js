import React from "react";
import './StepProgressBar.css';
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
            <div class="filled">1</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div class="unfilled">2</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div class="unfilled">3</div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div class="unfilled">4</div>
          )}
        </Step>
      </ProgressBar>
    );
  }
}

export default StepProgressBar;