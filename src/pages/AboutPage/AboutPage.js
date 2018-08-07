import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              Main{' '}
              <span className="highlight">Java</span>, big fan of{' '}
              <span className="highlight">JavaScript</span> and{' '}
              <span className="highlight">Python</span>.
            </p>
            <p>
              I like everything{' '}
              <span className="highlight">open-source</span>. And I like to "open source" everything.
              I never stop learning. When I am free, I will bury myself in cutting-edge technologies, like{' '}
              <span className="highlight">blockchain</span>.
              Besides, I stay close to the community and try to keep tabs with the pace at which the web is evolving.
            </p>
            <p>
              "The faintest ink is better than the best memory." --- I also like to{' '}
              <span className="highlight">blog</span> what I learn. Please check out my{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://mabuxi.gitbook.io/mabuxi/"><span className="highlight">Gitbook</span></a>.
            </p>
            <p>
              I have a broad range of hands-on experience including{' '}
              <span className="highlight">Web Application Development</span>,{' '}
              <span className="highlight">Cloud Computing</span>,{' '}
              <span className="highlight">Big Data Processing</span>,{' '}
              <span className="highlight">Machine Learning</span>, and{' '}
              <span className="highlight">Blokchain Application Development</span>.
            </p>
            <p>
              Java, Spring, MongoDB, MySQL, Redis, React, Angular2, and Node.js are my main stacks.
            </p>
            <p>
              AWS, Docker, Elasticsearch, Logstash, Kibana, Nagios, Hadoop, Spark, Lucene, and Tensorflow are my favorite tools.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
