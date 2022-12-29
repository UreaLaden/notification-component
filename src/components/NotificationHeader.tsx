import * as React from 'react';
import { styles } from './NotificationHeader.css';

const NotificationHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
              Notifications
              <div className={styles.notificationCount}>3</div>
            </div>
            <div className={styles.readText}>Mark all as read</div>
          </div>
    )
};

export default NotificationHeader;