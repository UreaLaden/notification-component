import { Persona, PersonaSize } from '@fluentui/react';
import * as React from 'react';
import { UserDetailProps } from '../utilities/users';
import { styles } from './Notification.css';





interface INotificationProps{
    user:UserDetailProps;
}

const Notification = (props:INotificationProps) => {
    const {user} = props;

    const getNotificationAction = (user:UserDetailProps) =>{
        let result;
        switch(user.action){
            case 'follow' :
                result = 'followed you';
                break;
            case 'message': 
                result = `sent you a private message`;
                break; 
            case 'reaction':
                result = `reacted to your recent post ${user.target}`;    
                break;
            case 'leave':
                result = `left the group ${user.target}`;
                break;
            case 'join' :
                result = `joined your group ${user.target}`;
                break;
            case 'comment':
                result = `commented on your picture ${user.target}`;
                break;
        }
        return [user.username,result];
    }
  
    const userAction = getNotificationAction(user);
    return (
        <div className={user.isRead ? styles.entryContainer : styles.entryContainerNew}>
            <Persona 
                imageUrl={user.imageUrl}
                size={PersonaSize.size32}
                imageInitials={"LM"}
                showSecondaryText={true}
                secondaryText={user.timeSpan}
                onRenderPrimaryText={() =>{
                    return(
                        <div className={styles.primaryTextContainer}>
                            <div className={styles.primaryText}>{userAction[0]}</div>
                            <div className={styles.primaryTextAction}>{userAction[1]}</div>
                        </div>
                    )
                }}
                styles={{secondaryText:styles.secondaryText}}/>
                
        <span className={user.isRead ? styles.readBubble : styles.newBubble}></span>
        </div>
    )
};

export default Notification;