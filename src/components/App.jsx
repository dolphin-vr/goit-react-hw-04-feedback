import { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  feedType = Object.keys(this.state);

  countTotalFeedback = () =>{
    return  this.state.good +  this.state.neutral +  this.state.bad;
  }

  countPositiveFeedbackPercentage = () =>{
    return Math.round(this.state.good / this.countTotalFeedback() *100);
  }

  handleFeedback = (ev) => {
    this.setState(prevState =>{
      return {[ev.target.name]: prevState[ev.target.name] + 1}
    })
  };

  render() {
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.feedType} onLeaveFeedback={this.handleFeedback} />
       </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
