import { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Section } from './Section/Section';
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export const App = () => {
  const [feeds, setFeeds] = useState({ good: 0, neutral: 0, bad: 0 }) ;

  const feedType = Object.keys(feeds);

  const total = feeds.good +  feeds.neutral +  feeds.bad;

  const positivePercentage = Math.round(feeds.good / total *100);

  const handleFeedback = (ev) => {
    setFeeds(prevFeeds =>({...prevFeeds, [ev.target.name]: prevFeeds[ev.target.name] + 1}))
  };

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={feedType} onLeaveFeedback={handleFeedback} />
       </Section>
        <Section title="Statistics">
          <Statistics good={feeds.good} neutral={feeds.neutral} bad={feeds.bad} 
            total={total} positivePercentage={positivePercentage} />
        </Section>
        <GlobalStyle />
      </Layout>
    );
}
