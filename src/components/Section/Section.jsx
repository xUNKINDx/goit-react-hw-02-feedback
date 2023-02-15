import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h2>{title}</h2>
        {children}
      </>
    );
  }
}

export default Section;
