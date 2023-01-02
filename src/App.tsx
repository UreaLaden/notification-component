import React from 'react';
import {
  styles
} from './App.css';
import Notification, { UserDetailProps } from './components/Notification';
import NotificationHeader from './components/NotificationHeader';
function App() {

  const user: UserDetailProps = {
    username: "Leaundrae Mckinney",
    target: "Get Money",
    imageUrl: `${process.env.PUBLIC_URL}/images/image-chess.png`
  }
  return (
    <div className={styles.parentContainer}>
      <div className={styles.appContainer}>
        <div className={styles.contentContainer}>
          <NotificationHeader />
          <Notification
            user={user}
            action={'follow'}
            isRead={false}
            notificationDate={new Date()}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
