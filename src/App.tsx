import React from 'react';
import {
  styles
} from './App.css';
function App() {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.appContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.header}>
            <div className={styles.title}>
              Notifications
              <div className={styles.notificationCount}>3</div>
            </div>
            <div className={styles.readText}>Mark all as read</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
