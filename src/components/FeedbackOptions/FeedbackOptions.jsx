import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    const { handleGoodClick, handleNeutralClick, handleBadClick } = this.props;

    return (
      <>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      </>
    );
  }
}

export default FeedbackOptions;
