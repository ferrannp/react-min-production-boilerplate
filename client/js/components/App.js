import styles from '../../styles/components/App.scss';

import React from 'react';

const App = React.createClass({
  render() {
    return (
      <div className={styles.app}>
        <section className={styles.box}>
          <h1>React Min Production Boilerplate</h1>
          <p>The boilerplate is up and running!</p>
          <a href="https://github.com/ferrannp/react-min-production-boilerplate.git">
            react-min-production-boilerplate
          </a>
        </section>
      </div>
    );
  }
});

export default App;
