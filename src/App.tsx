import React from 'react';
import {
  styles
} from './App.css';
import Notification from './components/Notification';
import NotificationHeader from './components/NotificationHeader';
import { getUsers } from './utilities/users';

function App() {
  const users = getUsers();
  return (
    <div className={styles.parentContainer}>
      <div className={styles.appContainer}>
        <div className={styles.contentContainer}>
          <NotificationHeader />
          <div className={styles.entryContainer}>

          {users.map((user) =>
            <Notification key={user.username} user={user} />
            )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
